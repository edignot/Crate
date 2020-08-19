// Imports
import React from 'react';

// ------------------------ STORYBOOK ( NEW FORMAT ) ------------------------------
// DEVELOPMENT ENVIRONMENT AND PLAYGROUND FOR UI COMPONENTS
// RUNS OUTSIDE MAIN REACT APPLICATION
// ALLOWS CREATE COMPONENTS INDEPENDENTLY AND SHOW CASE THEM INTERACTIVELY IN ISOLATED DEVELOPMENT ENVIRONMENT
// https://storybook.js.org/docs/react/get-started/introduction
// ALLOWS ISOLATE THE CODE AND VISUALIZE IT
// EACH STORY REPRESENTS SINGLE VISUAL STATE OF A COMPONENT
// ------------------------ STORYBOOK ------------------------------

// ------------------------ STORIES OF ( OLD FORMAT ) ------------------------------
// STORYBOOK API FOR ADDING STORIES
//github.com/storybookjs/storybook/blob/next/lib/core/docs/storiesOf.md
// SHOULD MIGRATE TO STORYBOOK https://github.com/storybookjs/storybook/tree/next/lib/codemod
// ------------------------ STORIES OF ------------------------------

https: import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// UI Imports
import Button from '../../src/ui/button/Button';
import Icon from '../../src/ui/icon/Icon';

// Buttons
storiesOf('Button', module)
    .add('primary', () => (
        <Button type='button' theme='primary' onClick={action('clicked')}>
            Button
        </Button>
    ))
    .add('secondary', () => (
        <Button type='button' theme='secondary' onClick={action('clicked')}>
            Button
        </Button>
    ))
    .add('default', () => (
        <Button type='button' onClick={action('clicked')}>
            Button
        </Button>
    ))
    .add('with icon', () => (
        <Button type='button' theme='primary' onClick={action('clicked')}>
            Button <Icon size={1.3}>face</Icon>
        </Button>
    ));
