import React from 'react'
import FirstView from '../../../components/lps/Pr_A/FirstView';
import Worries from '../../../components/lps/Pr_A/Worries';
import Value from '../../../components/lps/Pr_A/Value';
import UserVoice from '../../../components/lps/Pr_A/UserVoice';
import Plan from '../../../components/lps/Pr_A/Plan';
import PricingTable from '../../../components/lps/Pr_A/PricingTable';

const Pr_A = () => {
  return (
    <>
        <FirstView />
        <Worries />
        <Value />
        <UserVoice />
        <Plan />
        <PricingTable />
    </>
  )
}

export default Pr_A

// getInitialPropsを使用してnavPositionを指定
Pr_A.getInitialProps = async () => {
    return { navPosition: "none" };
  };
  