import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import { TabCards } from './cards/TabCards';
 import TabCardList from './cards/TabCardList';
 import './TabsDisplayer.css'

function TabsDisplayer () {
  return (
  <Tabs selectedTabClassName="activeTab">
    <TabList >
      <Tab >Domains</Tab>
      <Tab >Web Hosting</Tab>
      <Tab >Dedicated Servers</Tab>
      <Tab >Virtual Cloud Servers</Tab>
      <Tab >WordPress Hosting</Tab>
      <Tab >Email Hosting</Tab>
      <Tab >VPS Hosting Servers</Tab>
      <Tab >Free Hosting</Tab>
    </TabList>

    <TabPanel>
      <TabCardList list={TabCards[0]}/>
    </TabPanel>
    <TabPanel>
    <TabCardList list={TabCards[1]} />
    </TabPanel>
    <TabPanel>
    <TabCardList list={TabCards[2]} />
    </TabPanel>
    <TabPanel>
    <TabCardList list={TabCards[3]} />
    </TabPanel>
    <TabPanel>
    <TabCardList list={TabCards[4]} />
    </TabPanel>
    <TabPanel>
    <TabCardList list={TabCards[5]} />
    </TabPanel>
    <TabPanel>
    <TabCardList list={TabCards[6]} />
    </TabPanel>
    <TabPanel>
    <TabCardList list={TabCards[7]} />
    </TabPanel>
  </Tabs>
  );
}
export default TabsDisplayer;