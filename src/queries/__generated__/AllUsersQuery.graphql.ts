/**
 * @generated SignedSource<<88f842fd3a448f8a832a9eb6b83b038c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AllUsersQuery$variables = {};
export type AllUsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly id: string;
    readonly username: string | null;
    readonly name: string | null;
    readonly email: string | null;
  } | null> | null;
};
export type AllUsersQuery = {
  variables: AllUsersQuery$variables;
  response: AllUsersQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "59ee204acb25200cafb60e02352eb24f",
    "id": null,
    "metadata": {},
    "name": "AllUsersQuery",
    "operationKind": "query",
    "text": "query AllUsersQuery {\n  users {\n    id\n    username\n    name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "91efcbb22bc40d326e01ec2b1820fafe";

export default node;
