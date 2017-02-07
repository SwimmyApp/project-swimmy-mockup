import {observable, computed, reaction} from 'mobx';
import GroupModel from '../models/GroupModel';

export default class GroupStore {
	@observable groups = [];

  constructor({ root }) {
    this.root = root;
		//eventually we'll get this data asynchronously from server; for now, mocked JSON
		//here's some starter JSON for a group:
    `
		{
			'id': 1,
			'name': '',
			'description': '',
			'zipcode': '',
			'issues': [
				{
					'id': 1,
					'name': ''
				}
			],
			'memberships': [
				{
					'id': 1,
					'user_id': 1,
					'group_id': 1,
					'role': ''
				}
			]
		}
		`
    let groups = [
      {
        'id': 1,
        'name': 'Bloomington Peace Action Coalition',
        'description': 'We believe in social, economic, and climate justice.',
        'zipcode': '47401',
        'issues': [
          {
            'id': 1,
            'name': 'Environment'
          },
          {
            'id': 2,
            'name': 'Social justice'
          },
          {
            'id': 3,
            'name': 'Economic justice'
          }
        ],
        'memberships': [
          {
            'id': 1,
            'user_id': 1,
            'group_id': 1,
            'role': 'Owner'
          },
          {
            'id': 2,
            'user_id': 2,
            'group_id': 1,
            'role': 'Member'
          },
          {
            'id': 3,
            'user_id': 3,
            'group_id': 1,
            'role': 'Member'
          },
        ]
      },
      {
        'id': 2,
        'name': 'Bloomington IWW Chapter',
        'description': 'Local chapter of Industrial Workers of the World, i.e., "The Wobblies." ',
        'zipcode': '47401',
        'issues': [
          {
            'id': 1,
            'name': 'Economic justice'
          }
        ],
        'memberships': [
          {
            'id': 1,
            'user_id': 2,
            'group_id': 2,
            'role': 'Owner'
          },
          {
            'id': 2,
            'user_id': 4,
            'group_id': 2,
            'role': 'Member'
          }
        ]
      }
    ];
    this.groups = [];
    groups.forEach((group) => {
      this.groups.push(new GroupModel(this, group));
    });
  }
}