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
    'Users',
    'Public Servants',
    'Doctors',
    'Doctor Specialization'
  ];
  
  const Users = () => {
    const [users, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [salary, setSalary] = useState(5000);
    const [phone, setPhone] = useState('');
    const [cname, setCname] = useState('');
    const [editemail, setEditemail] = useState('');
    const [editname, setEditName] = useState('');
    const [editsurname, setEditSurname] = useState('');
    const [editsalary, setEditSalary] = useState(5000);
    const [editphone, setEditPhone] = useState('');
    const [editcname, setEditCname] = useState('');
    const apiEndPoint = "https://web-production-6663.up.railway.app/users";
   
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
      axios.delete(apiEndPoint, { data: { email: user.email} })
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
              email: email, 
              name: name,
              surname: surname,
              salary: salary,
              phone: phone,
              cname: cname
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
              email: editemail, 
              name: editname,
              surname: editsurname,
              salary: editsalary,
              phone: editphone,
              cname: editcname
            }
        }).then((result)=>{
                alert('Data Edited');
            loadUsers();
          })
    };
  
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('People');
    const [activeLink, setActiveLink] = useState('Users');
  
    const mainLinks = mainLinksMockdata.map((link) => (
      <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
        <UnstyledButton
          onClick={() => {
            if(link.label === "Diseases") {
              window.location.href='/';
            }
            if(link.label === "Locations") {
              window.location.href='/country';
            }
            if(link.label === "Actions") {
              window.location.href='/record';
            }
            if(link.label === "Queries") {
              window.location.href='/query';
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
          if(link === "Doctors") {
            window.location.href='/doctor';
          }  
          if(link === "Public Servants") {
              window.location.href='/publicservant';
          }  
          if(link === "Doctor Specialization") {
            window.location.href='/specialize';
        }  
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
          <Text size="sm">{user.name}</Text>
        </td>
        <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.surname }</Text>
        </td>
        <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.salary }</Text>
        </td>
        <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.phone }</Text>
        </td>
        <td scope="col" class="col-sm-2"></td>
        <td>
          <Text size="sm">{user.cname }</Text>
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
                        <TextInput value={editname} onChange={(event) => setEditName(event.currentTarget.value)} label="Enter name" placeholder="" size="xs" />
                        <TextInput value={editsurname} onChange={(event) => setEditSurname(event.currentTarget.value)} label="Enter surname" placeholder="" size="xs" />
                        <TextInput value={editsalary} onChange={(event) => setEditSalary(event.currentTarget.value)} label="Enter salary" placeholder="" size="xs" />
                        <TextInput value={editphone} onChange={(event) => setEditPhone(event.currentTarget.value)} label="Enter phone" placeholder="" size="xs" />
                        <TextInput value={editcname} onChange={(event) => setEditCname(event.currentTarget.value)} label="Enter country name" placeholder="" size="xs" />
                        <div style={{marginTop:"10px"}}> 
                            <Button onClick={() => handleEdit()}>Edit</Button>
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
          <Navbar height={2000} width={{ sm: 300 }}>
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
                        <Button>Add new user</Button>
                    </Popover.Target>
                    <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
                    
                        <TextInput value={email} onChange={(event) => setEmail(event.currentTarget.value)} label="Email" placeholder="john.smith@gmail.com" size="xs" mt="xs" />
                        <TextInput value={name} onChange={(event) => setName(event.currentTarget.value)} label="Name" placeholder="John" size="xs" mt="xs" />
                        <TextInput value={surname} onChange={(event) => setSurname(event.currentTarget.value)} label="Surname" placeholder="Smith" size="xs" />
                        <TextInput value={salary} onChange={(event) => setSalary(event.currentTarget.value)} label="Salary" placeholder="5000" size="xs" />
                        <TextInput value={phone} onChange={(event) => setPhone(event.currentTarget.value)} label="Phone" placeholder="87787890909" size="xs" />
                        <TextInput value={cname} onChange={(event) => setCname(event.currentTarget.value)} label="Country name" placeholder="Korea" size="xs" />
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
                <th scope="col">Email</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Name</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Surname</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Salary</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Phone Number</th>
                <th scope="col" class="col-sm-2"></th>
                <th scope="col" class="text-start">Country Name</th>
                <th scope="col" class="col-sm-2"></th>
                <th class="text-center"></th>
  
                
              </tr>
            </thead>
                <tbody>{rows}</tbody>
              </Table>

              <div style={{marginTop:"50px"}}>
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
  
  export default Users;