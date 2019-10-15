import React from 'react'
import { shallow } from 'enzyme'
import { CurrencyHeader } from '../../components/CurrencyHeader'

test('should render CurrencyHeader correctly', () => {
   const wrapper = shallow(<CurrencyHeader />)
   expect(wrapper).toMatchSnapshot()
})