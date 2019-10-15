import React from 'react'
import { shallow } from 'enzyme'
import { TheBiggestTransaction } from '../../components/TheBiggestTransaction'

test('should render TheBiggestTransaction correctly', () => {
   const wrapper = shallow(<TheBiggestTransaction />)
   expect(wrapper).toMatchSnapshot()
})