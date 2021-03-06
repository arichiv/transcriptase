/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::RefetchRelay>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<N9Jri3M6GhBOE/Xrm4v4fnCYg5aq+3pkR4oTgNxOtNaLMAgEnIFr/ZKJYCb8Sj4gL83H90kqfTdrpKU2SZqdKw==>>
 */

import * as React from "react";
import {
  commitMutation,
  createRefetchContainer,
  graphql,
  MappedFragmentProps,
  RemoveRelayProp,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IRefetchRelayProps {
  test1: string;
  data: RefetchRelayQuery;
}

export interface IRefetchRelayState {
  test2?: string;
}

class __RefetchRelay extends React.Component<IRefetchRelayProps, IRefetchRelayState> {

  public constructor(
    props: IRefetchRelayProps,
  ) {
    super(props);
    this.state = {
      /* BESPOKE START <<state>> */
      /* BESPOKE END <<state>> */
    };
  }

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

const _RefetchRelay: React.ComponentType<MappedFragmentProps<RemoveRelayProp<IRefetchRelayProps>>> = createRefetchContainer(
  __RefetchRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export { _RefetchRelay as RefetchRelay };
