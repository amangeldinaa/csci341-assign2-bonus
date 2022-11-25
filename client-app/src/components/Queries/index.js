import { 
    createStyles, 
    Navbar, 
    UnstyledButton, 
    Tooltip, 
    Title,
    Table, 
    Group, 
    Text, 
    ActionIcon, 
    ScrollArea,
    Autocomplete,
    Pagination
} from '@mantine/core';
  import {
    IconVirus,
    IconUsers,
    IconMap2,
    IconPencil,
    IconFileDescription,
    IconTrash,
    IconSearch
  } from '@tabler/icons';
  import { Popover, Button, TextInput } from '@mantine/core';
  import { useState, useEffect } from 'react';
  import axios from "axios";
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      display: 'flex',
    },
  
    aside: {
      flex: '0 0 60px',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRight: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    },
  
    main: {
      flex: 1,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  
    mainLink: {
      width: 44,
      height: 44,
      borderRadius: theme.radius.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      },
    },
  
    mainLinkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  
    title: {
      boxSizing: 'border-box',
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      padding: theme.spacing.md,
      paddingTop: 18,
      height: 60,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    },
  
    link: {
      boxSizing: 'border-box',
      display: 'block',
      textDecoration: 'none',
      borderTopRightRadius: theme.radius.md,
      borderBottomRightRadius: theme.radius.md,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      padding: `0 ${theme.spacing.md}px`,
      fontSize: theme.fontSizes.sm,
      marginRight: theme.spacing.md,
      fontWeight: 500,
      height: 44,
      lineHeight: '44px',
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  
    linkActive: {
      '&, &:hover': {
        borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        color: theme.white,
      },
    },
  }));
  
  const mainLinksMockdata = [
    { icon: IconVirus, label: 'Diseases' },
    { icon: IconUsers, label: 'People' },
    { icon: IconMap2, label: 'Locations' },
    { icon: IconFileDescription, label: 'Actions' },
    { icon: IconSearch, label: 'Queries' }
  ];
  
  const linksMockdata = [
  ];
  
  const Query = () => {
    const [res, setRes] = useState([]);
    const [res2, setRes2] = useState([]);
    const [res3, setRes3] = useState([]);
    const [res4, setRes4] = useState([]);
    const [res5, setRes5] = useState([]);
    const [res6, setRes6] = useState([]);
    const [res7, setRes7] = useState([]);
    const [res8, setRes8] = useState([]);
    const [res9, setRes9] = useState([]);
    const [res10, setRes10] = useState([]);
    const [res11, setRes11] = useState([]);

    const apiEndPoint = "https://web-production-6663.up.railway.app/query1";

    const queries = [
      { res: res ,id: 1, query: 'List the disease code and the description of diseases that are caused by “bacteria” (pathogen) and were discovered before 1990.'},
      { res: res2, id: 2, query: 'List the name, surname and degree of doctors who are not specialized in “infectious diseases”.' },
      { res: res3, id: 3, query: 'List the name, surname and degree of doctors who are specialized in more than 2 disease types.' },
      { res: res4, id: 4, query: 'For each country list the cname and average salary of doctors who are specialized in “virology”.'},
      { res: res5, id: 5, query: 'List the departments of public servants who report “covid-19” cases in more than one country and the number of such public servants who work in these departments. (i.e “Dept1 3” means that in the “Dept1” department there are 3 such employees.)'},
      { res: res6, id: 6, query: 'Double the salary of public servants who have recorded covid-19 patients more than 3 times.'},
      { res: res7, id: 7, query: 'Delete the users whose name contain the substring “bek” or “gul” (e.g. Alibek, Gulsim)'},
      { res: res8, id: 8, query: 'Create an index namely “idx pathogen” on the “pathogen” field.'},
      { res: res9, id: 9, query: 'List the email, name, and department of public servants who have created records where the number of patients is between 100000 and 999999'},
      { res: res10, id: 10, query: 'List the top 5 counties with the highest number of total patients recorded.'},
      { res: res11, id: 11, query: 'Group the diseases by disease type and the total number of patients treated.'},

    ]
   
    useEffect(() => {
      loadQuery1();
      loadQuery2();
      loadQuery3();
      loadQuery4();
      loadQuery5();
      loadQuery6();
      loadQuery7();
      loadQuery8();
      loadQuery9();
      loadQuery10();
      loadQuery11();
    }, []);
   
    const loadQuery1 = async () => {
      const result = await axios.get(apiEndPoint);
      console.log(result);
      setRes(result.data);
    };

    const loadQuery2 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query2`);
      console.log(result);
      setRes2(result.data);
    };

    const loadQuery3 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query3`);
      console.log(result);
      setRes3(result.data);
    };

    const loadQuery4 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query4`);
      console.log(result);
      setRes4(result.data);
    };

    const loadQuery5 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query5`);
      console.log(result);
      setRes5(result.data);
    };

    const loadQuery6 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query6`);
      console.log(result);
      setRes6(result.data);
    };

    const loadQuery7 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query7`);
      console.log(result);
      setRes7(result.data);
    };

    const loadQuery8 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query8`);
      console.log(result);
      setRes8(result.data);
    };

    const loadQuery9 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query9`);
      console.log(result);
      setRes9(result.data);
    };

    const loadQuery10 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query10`);
      console.log(result);
      setRes10(result.data);
    };

    const loadQuery11 = async () => {
      const result = await axios.get(`https://web-production-6663.up.railway.app/query11`);
      console.log(result);
      setRes11(result.data);
    };
  
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Queries');
    const [activeLink, setActiveLink] = useState('Query1');
  
    const mainLinks = mainLinksMockdata.map((link) => (
      <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
        <UnstyledButton
          onClick={() => {
            if(link.label === "Diseases") {
              window.location.href='/';
            }
            if(link.label === "People") {
                window.location.href='/users';
              }
            if(link.label === "Actions") {
              window.location.href='/record';
            }
            if(link.label === "Locations") {
              window.location.href='/country';
            }
            setActive(link.label)}}
          className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
        >
          <link.icon stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    ));
  
    const links = linksMockdata.map((link) => (
      <a
        className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
        href="/"
        onClick={(event) => {
        //   if(link === "Public Servants") {
        //     window.location.href='/publicservant';
        //   }  
        //   if(link === "Users") {
        //       window.location.href='/users';
        //   }  
        //   if(link === "Doctors") {
        //     window.location.href='/doctor';
        // }  
          event.preventDefault();
          setActiveLink(link);
        }}
        key={link}
      >
        {link}
      </a>
    ));

    let display
    const handleDisplay = (e) => {
      if(e == 1) {
          display = res.map((r) => (
                <tr>
                  <th scope="col" class="col-sm-2"></th> 
                  <td>{r[0]}</td>
                  <th scope="col" class="col-xs-2"></th>
                  <td>{r[1]}</td>
                  <th scope="col" class="col-sm-2"></th>
                </tr>
          ));
      } else if (e == 2) {
          display = res2.map((r) => (
            <tr>
              <th scope="col" class="col-sm-2"></th> 
              <td>{r[0]}</td>
              <th scope="col" class="col-sm-2"></th> 
              <td>{r[1]}</td>
              <th scope="col" class="col-sm-2"></th> 
              <td>{r[2]}</td>
              <th scope="col" class="col-sm-2"></th> 
            </tr>
          ));
      } else if (e == 3) {
          display = res3.map((r) => (
            <tr>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[2]}</td>
            </tr>
          ));
      } else if (e == 4) {
          display = res4.map((r) => (
            <tr>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
            </tr>
          ));
      } else if (e == 5) {
        display = res5.map((r) => (
          <tr>
            <td>{r[0]}</td>
            <td>{r[1]}</td>
          </tr>
        ));
      } else if (e == 6) {
        display = res6
      } else if (e == 7) {
      display = "Succesfully deleted users"
      } else if (e == 8) {
        display = res8
      } else if (e == 9) {
        display = res9.map((r) => (
          <tr>
            <td>{r[0]}</td>
            <td>{r[1]}</td>
            <td>{r[2]}</td>
          </tr>
        ));
      } else if (e == 10) {
        display = res10.map((r) => (
          <tr>
            <td>{r[0]}</td>
          </tr>
        ));
      } else if (e == 11) {
        display = res11.map((r) => (
          <tr>
            <td>{r[0]}</td>
            <td>{r[1]}</td>
          </tr>
        ));
      } 
    }

    
    const rows = queries.map((user) => (
      <tr >
        <td scope="col" class="col-sm-2"></td>
        <td>
          
          <Text fw={500}>Query {user.id}: </Text>
          <Text size="sm">{user.query}</Text>
          <Text fw={500}></Text>
          <Text fw={500}>{'\n'}Answer: </Text>
          <Text> 
                {handleDisplay(user.id)}
                {display}
                {/* {"display" + user.id} */}
          </Text>
        </td>
        {/* <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.population}</Text>
          </td>
        <td scope="col" class="col-sm-2"></td>
        <td>
          
        </td> */}
      </tr>
    ));
  
      return (
        <div className='container-d' >
          <Navbar height={1150} width={{ sm: 300 }}>
              <Navbar.Section grow className={classes.wrapper}>
                  <div className={classes.aside}>
                      {mainLinks}
                  </div>
                  <div className={classes.main}>
                      <Title order={4} className={classes.title}>
                          {active}
                      </Title>
  
                      {links}
                  </div>
              </Navbar.Section>
          </Navbar>
          <div className='users'>
            <ScrollArea>
           
              <Table sx={{ minWidth: 850 }} verticalSpacing="md">
              <thead class="thead-primary">
              <tr>
                {/* <Text fw={500}>Query 1: </Text>
                <Text fz="sm">List the disease code and the description of diseases that are caused by “bacteria” (pathogen) and were discovered before 1990.</Text>
                <Text fw={500}>Answer: </Text> */}
                {/* {res.map((r, index) => (
                  <tr>
                    <td>{r[0]} {" "} {" "} {" "} {r[1]}</td>
                  </tr>
                ))} */}
                
              </tr>
            </thead>
                <tbody>{rows}</tbody>
              </Table>

              
            </ScrollArea>
          </div>
          
          </div>
        );
  };
  
  export default Query;