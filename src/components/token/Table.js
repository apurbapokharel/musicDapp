import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { fetchNormalTxn } from '../API Caller/Apifetcher'
import Modal from './Modal'

const Ttable = (props) => {
  const [txnData, setTxnData] = useState([])
  const [historyNotFoundStatus, setHistoryNotFoundStatus] = useState(0)
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('age');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    const fetchAPI = async() => {
        const txndata  = await fetchNormalTxn()
        if(props.address){  
          if(txndata.result.find(x => (x.from == props.address || x.to == props.address))){
            setHistoryNotFoundStatus(0)
            setTxnData(txndata.result.filter(x => (x.from == props.address || x.to == props.address)))
          } 
          else {
            setTxnData([])
            setHistoryNotFoundStatus(1)
          }
        }else{
          setTxnData(txndata.result)
        }
    }
    fetchAPI()
}, [props.address])

  function createData(txnHash, block, age, from, to, value, more) {
    return { txnHash, block, age, from, to, value, more };
  }

  const rows = []
  txnData.map((value, key) => {
    var more = [{ input: value.input, nonce: value.nonce }]
    rows.push(createData( value.hash, value.blockNumber, new Date(value.timeStamp * 1000).toLocaleDateString(), value.from, value.to, value.value, more))
  }) 
  
  function Row(props){
    const {row} = props
    const [open, setOpen] = useState(false)

    function copyText(stringToCopy) {
      console.log("stringToCopy", stringToCopy)
      navigator.clipboard.writeText(stringToCopy).then(ReactDOM.render(<Modal string={stringToCopy}/>, document.getElementById("modal")))

    }

    return(
      <>
        <TableRow >
          <TableCell >
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          {/* <TableCell component="th" scope="row">{key+1}</TableCell> */}
          <TableCell onDoubleClickCapture={copyText.bind(null, row.txnHash)}>{row.txnHash.slice(0,10)+'...'}</TableCell>
          <TableCell >{row.block}</TableCell>
          <TableCell >{row.age}</TableCell>
          <TableCell onDoubleClickCapture={copyText.bind(null, row.from)}>{row.from.slice(0,10)+'...'}</TableCell>
          <TableCell onDoubleClickCapture={copyText.bind(null, row.to)}>{row.to ? row.to.slice(0,10)+'...': 'Contract Creation'}</TableCell>
          <TableCell >{row.value }</TableCell>
        </TableRow>  
          
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">More</Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Input</TableCell>
                      <TableCell>Nonce</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.more.map((val) => (
                          <TableRow key={val.nonce}>
                            <TableCell component="th" scope="row" onDoubleClickCapture={copyText}>{val.input ? val.input.slice(0,50) + '...' : null}</TableCell>
                            <TableCell>{val.nonce}</TableCell>
                          </TableRow>                      
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>      
      </>
    )
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    { id: 'txnHash', label: 'Txn Hash' },
    { id: 'block' , label: 'Block' },
    { id: 'age', label: 'Date' },
    { id: 'from', label: 'From' },
    { id: 'to', label: 'To' },
    { id: 'value', label: 'DAPP' },
  ]

  function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">  </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
  };

  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
      textAlign: 'center'
    },
  }));

  function EnhancedTableToolbar () {
    const classes = useToolbarStyles();

    return (
      
      <Toolbar className={clsx(classes.root)}>
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div" >
          {historyNotFoundStatus == 1 ? "HISTORY NOT FOUND" : "HISTORY"}
        </Typography>
      </Toolbar>
    );
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    console.log('called', newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="modal"></div>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />

        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <Row  key={row.blockNumber} row={row} />
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    
    </div>
  );
  
  }
export default Ttable