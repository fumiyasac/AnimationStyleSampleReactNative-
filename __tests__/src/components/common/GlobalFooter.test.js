import 'react-native';
import React from 'react';
import GlobalFooter from '../../../../src/components/common/GlobalFooter';
import GlobalTab from '../../../../src/components/common/GlobalTab';

import renderer from 'react-test-renderer';

it('GlobalFooterコンポーネントが正しく表示されること', () => {

  let stubObjectArray = [
    { screen: "feed", title: "フィード", icon: "list" },
    { screen: "diary", title: "勉強日記", icon: "clipboard" },
    { screen: "record", title: "達成記録", icon: "medal" },
    { screen: "shopping", title: "お買い物", icon: "book" }
  ];

  const onPressMock = jest.fn();

  const makeTabs = () => { 
    return stubObjectArray.map( (tabBarItem, index) => {
      return (
        <GlobalTab 
          key={index}
          selected={0 === index}
          title={tabBarItem.title}
          icon={tabBarItem.icon}
          onPress={onPressMock()} />
      );
    });
  };

  const tree = renderer.create(
    <GlobalFooter
      tabs={makeTabs()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  