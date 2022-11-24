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
  IconSearch,
  IconFileSearch
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
  'Diseases',
  'Disease Types',
  'Disease Discovery',
];

const Discover = () => {
  const [users, setUser] = useState([]);
  const [cname, setCname] = useState('');
  const [diseasecode, setDiseasecode] = useState('');
  const [date, setDate] = useState('');
  const [editcname, setEditCname] = useState('');
  const [editdiseasecode, setEditDiseasecode] = useState('');
  const [editdate, setEditDate] = useState('');
  const apiEndPoint = "https://web-production-6663.up.railway.app/discover";
 
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
    axios.delete(apiEndPoint, { data: { disease_code: user.disease_code, cname: user.cname } })
    .then((result)=>{
      loadUsers();
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };

  const handleAdd = (e) =>
    {
      console.log(cname)
      console.log(date)
      console.log(diseasecode)
        axios({
            method: 'post',
            url: apiEndPoint,
            headers: {}, 
            data: {
            cname: cname, 
            first_enc_date: date,
            disease_code: diseasecode
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
            cname: editcname, 
            first_enc_date: editdate,
            disease_code: editdiseasecode
            }
        }).then((result)=>{
                alert('Data Edited');
            loadUsers();
          })
    };

  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Diseases');
  const [activeLink, setActiveLink] = useState('Disease Discovery');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
      <UnstyledButton
        onClick={() => {
            if(link.label === "People") {
                window.location.href='/users';
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
        if(link === "Diseases") {
          window.location.href='/';
        }  
        if(link === "Disease Types") {
            window.location.href='/diseasetype';
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
    <tr key={user.cname}>
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
        <Text size="sm">{user.first_enc_date }</Text>
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
                        <TextInput value={editcname} onChange={(event) => setEditCname(event.currentTarget.value)} label="Enter country name" placeholder="" size="xs" />
                        <TextInput value={editdiseasecode} onChange={(event) => setEditDiseasecode(event.currentTarget.value)}label="Enter disease code" placeholder="" size="xs" mt="xs" />
                        <TextInput value={editdate} onChange={(event) => setEditDate(event.currentTarget.value)}label="Enter date" placeholder="" size="xs" mt="xs" />
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
        <Navbar height={950} width={{ sm: 300 }}>
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
                        <Button>Add new discovery</Button>
                    </Popover.Target>
                    <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
                        <TextInput value={cname} onChange={(event) => setCname(event.currentTarget.value)} label="Country name" placeholder="Spain" size="xs" />
                        <TextInput value={diseasecode} onChange={(event) => setDiseasecode(event.currentTarget.value)} label="Disease code" placeholder="Z00" size="xs" mt="xs" />
                        <TextInput value={date} onChange={(event) => setDate(event.currentTarget.value)} label="Date" placeholder="1990-01-01" size="xs" mt="xs" />
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
              <th scope="col">Country Name</th>
              <th scope="col" class="col-sm-2"></th>
              <th scope="col" class="text-start">Disease Code</th>
              <th scope="col" class="col-sm-2"></th>
              <th scope="col" class="text-start">First encounter date</th>
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

export default Discover;