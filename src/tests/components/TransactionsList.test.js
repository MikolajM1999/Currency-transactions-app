import React from 'react'
import { shallow } from 'enzyme'
import { TransactionsList } from '../../components/TransactionsList'

test('should render TransactionsList correctly with no transactions', () => {
   const wrapper = shallow(<TransactionsList transactions={[]} />)
   expect(wrapper).toMatchSnapshot()
})

test('should render TransactionsList correctly with the data', () => {
   const transactions = [{
      name: 'abc',
      euro: 12,
      id: '1'
   }, {
      name: 'abcdef',
      euro: 1212,
      id: '2'
   }]
   const wrapper = shallow(<TransactionsList transactions={transactions} euroToPLN={4.29} />)
   expect(wrapper).toMatchSnapshot()
})