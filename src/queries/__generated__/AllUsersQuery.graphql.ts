/**
 * @generated SignedSource<<e18b104ac9edefb589434c66aa25426f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AllUsersQuery$variables = {};
export type AllUsersQuery$data = {
  readonly users: {
    readonly data: ReadonlyArray<{
      readonly id: string | null;
      readonly username: string | null;
      readonly name: string | null;
      readonly email: string | null;
      readonly posts: {
        readonly data: ReadonlyArray<{
          readonly id: string | null;
          readonly title: string | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
};
export type AllUsersQuery = {
  variables: AllUsersQuery$variables;
  response: AllUsersQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UsersPage",
    "kind": "LinkedField",
    "name": "users",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PostsPage",
            "kind": "LinkedField",
            "name": "posts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "data",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllUsersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllUsersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "945c56fe531e7b419786a56dd5ae2747",
    "id": null,
    "metadata": {},
    "name": "AllUsersQuery",
    "operationKind": "query",
    "text": "query AllUsersQuery {\n  users {\n    data {\n      id\n      username\n      name\n      email\n      posts {\n        data {\n          id\n          title\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d94379c22e675f8411e3c142f8ce90a0";

export default node;
