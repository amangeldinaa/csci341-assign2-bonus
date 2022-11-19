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
    { icon: IconFileDescription, label: 'Actions' }
  ];
  
  const linksMockdata = [
    'Records'
  ];
  
  const Record = () => {
    const [users, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [cname, setCname] = useState('');
    const [diseasecode, setDiseasecode] = useState('');
    const [deaths, setDeaths] = useState(100);
    const [patients, setPatients] = useState(100);
    
    const [editemail, setEditemail] = useState('');
    const [editcname, setEditCname] = useState('');
    const [editdiseasecode, setEditDiseasecode] = useState('');
    const [editdeaths, setEditDeaths] = useState(100);
    const [editpatients, setEditPatients] = useState(100);
    
    const apiEndPoint = "http://127.0.0.1:8000/record";
   
    useEffect(() => {
      loadUsers();
    }, []);
   
    const loadUsers = async () => {
      const result = await axios.get(apiEndPoint);
      setUser(result.data);
    };
  
  
    const handleDelete = (user) =>
    {
      console.log(user.disease_code)
      axios.delete(apiEndPoint, { data: {email: user.email, cname: user.cname, disease_code: user.disease_code } })
      .then((result)=>{
        loadUsers();
      })
      .catch(()=>{
        alert('Error in the Code');
      });
    };

    const handleAdd = (e) =>
    {
        axios({
            method: 'post',
            url: apiEndPoint,
            headers: {}, 
            data: {
              id: 21,
              email: email, 
              cname: cname,
              disease_code: diseasecode,
              total_deaths:deaths,
              total_patients:patients
            }
        }).then((result)=>{
                alert('Data Inserted');
            loadUsers();
          })
    };

    const handleEdit = (e) =>
    {
        axios({
            method: 'put',
            url: apiEndPoint,
            headers: {}, 
            data: {
              id: e.id,
              email: editemail, 
              cname: editcname,
              disease_code: editdiseasecode,
              total_deaths: editdeaths,
              total_patients: editpatients
            }
        }).then((result)=>{
                alert('Data Edited');
            loadUsers();
          })
    };
  
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Actions');
    const [activeLink, setActiveLink] = useState('Records');
  
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
  
    const rows = users.map((user) => (
      <tr key={user.email}>
        <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.email}</Text>
        </td>
        <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.cname}</Text>
          </td>
          <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.disease_code}</Text>
          </td>
          <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.total_deaths}</Text>
          </td>
          <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.total_patients}</Text>
          </td>
        <td scope="col" class="col-sm-2"></td>
        <td>
          <Group spacing={0} position="right">
          <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <ActionIcon>
                            <IconPencil size={16} stroke={1.5} />
                        </ActionIcon>

                    </Popover.Target>
                    <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
                        <TextInput value={editemail} onChange={(event) => setEditemail(event.currentTarget.value)}label="Enter email" placeholder="" size="xs" mt="xs" />
                        <TextInput value={editcname} onChange={(event) => setEditCname(event.currentTarget.value)} label="Enter country name" placeholder="" size="xs" />
                        <TextInput value={editdiseasecode} onChange={(event) => setEditDiseasecode(event.currentTarget.value)} label="Enter disease code" placeholder="" size="xs" />
                        <TextInput value={editdeaths} onChange={(event) => setEditDeaths(event.currentTarget.value)} label="Enter total deaths" placeholder="" size="xs" />
                        <TextInput value={editpatients} onChange={(event) => setEditPatients(event.currentTarget.value)} label="Enter patients" placeholder="" size="xs" />
                        <div style={{marginTop:"10px"}}> 
                            <Button onClick={() => handleEdit(user)}>Edit</Button>
                        </div>
                    </Popover.Dropdown>
                </Popover>
  
            <ActionIcon>
              <IconTrash size={16} stroke={1.5} onClick={() => handleDelete(user)}/>
            </ActionIcon>
  
          </Group>
        </td>
      </tr>
    ));
  
      return (
        <div className='container-d' >
          <Navbar height={1200} width={{ sm: 300 }}>
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
            <div style={{width:"100%",display:"flex",justifyContent:"space between"}}>
                <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <Button>Add new record</Button>
                    </Popover.Target>
                    <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
                    
                        <TextInput value={email} onChange={(event) => setEmail(event.currentTarget.value)} label="Email" placeholder="john.smith@gmail.com" size="xs" mt="xs" />
                        <TextInput value={cname} onChange={(event) => setCname(event.currentTarget.value)} label="Country name" placeholder="Korea" size="xs" mt="xs" />
                        <TextInput value={diseasecode} onChange={(event) => setDiseasecode(event.currentTarget.value)} label="Disease code" placeholder="Z99" size="xs" />
                        <TextInput value={deaths} onChange={(event) => setDeaths(event.currentTarget.value)} label="Total deaths" placeholder="100" size="xs" />
                        <TextInput value={patients} onChange={(event) => setPatients(event.currentTarget.value)} label="Total patients" placeholder="100" size="xs" />
                        <div style={{marginTop:"10px"}}> 
                            <Button onClick={() => handleAdd()}>Add</Button>
                        </div>
                    </Popover.Dropdown>
                </Popover>
            <div style={{width:"75%"}}></div>
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              icon={<IconSearch size={16} stroke={1.5} />}
              data={[]}
            />
            </div>
              <Table sx={{ minWidth: 850 }} verticalSpacing="md">
              <thead class="thead-primary">
              <tr>
                <th scope="col" class="col-sm-2"></th> 
                <th scope="col">Public Servant Email</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Country Name</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Disease Code</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Total Deaths</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Total Patients</th>
                <th scope="col" class="col-sm-2"></th>
                <th class="text-center"></th>
  
                
              </tr>
            </thead>
                <tbody>{rows}</tbody>
              </Table>
              <div style={{marginTop:"25px"}}>
            <Pagination
                total={10}
                position="center"
                styles={(theme) => ({
                    item: {
                    '&[data-active]': {
                        backgroundImage: theme.fn.gradient({ from: 'blue', to: 'blue' }),
                    },
                    },
                })}
                />
            </div>
            </ScrollArea>
          </div>
          
          </div>
        );
  };
  
  export default Record;