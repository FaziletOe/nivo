/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { areaCurvePropKeys, stackOrderPropKeys, stackOffsetPropKeys } from '@nivo/core'
import { StreamDefaultProps as defaults } from '@nivo/stream'
import {
    marginProperties,
    axesProperties,
    motionProperties,
    defsProperties,
} from '../../../lib/componentProperties'

const curveOptions = []
areaCurvePropKeys.forEach((curve, i) => {
    curveOptions.push(<code key={curve}>'{curve}'</code>)
    if (i < areaCurvePropKeys.length - 1) {
        curveOptions.push(<span key={`${curve}.comma`}>,&nbsp;</span>)
    }
})

export default [
    /*##################################################################################################################

        Base

    ##################################################################################################################*/
    {
        key: 'width',
        scopes: ['api'],
        docScopes: '*',
        description: (
            <span>
                not required if using&nbsp;
                <code>&lt;ResponsiveStream&nbsp;/&gt;</code>.
            </span>
        ),
        help: 'Chart width (px).',
        type: '{number}',
        required: true,
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            unit: 'px',
            min: 100,
            max: 1000,
            step: 5,
        },
    },
    {
        key: 'height',
        scopes: ['api'],
        docScopes: '*',
        description: (
            <span>
                not required if using&nbsp;
                <code>&lt;ResponsiveStream&nbsp;/&gt;</code>.
            </span>
        ),
        help: 'Chart height (px).',
        type: '{number}',
        required: true,
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            unit: 'px',
            min: 100,
            max: 1000,
            step: 5,
        },
    },
    {
        key: 'offsetType',
        scopes: '*',
        description: 'Offset type.',
        type: '{string}',
        required: false,
        controlType: 'choices',
        controlGroup: 'Base',
        controlOptions: {
            choices: stackOffsetPropKeys.map(key => ({
                label: key,
                value: key,
            })),
        },
    },
    {
        key: 'order',
        scopes: '*',
        description: 'Layers order.',
        type: '{string}',
        required: false,
        controlType: 'choices',
        controlGroup: 'Base',
        controlOptions: {
            choices: stackOrderPropKeys.map(key => ({
                label: key,
                value: key,
            })),
        },
    },
    {
        key: 'curve',
        scopes: '*',
        description: (
            <span>
                Defines the curve factory to use for the area generator.
                <br />
                Must be one of: {curveOptions}.
            </span>
        ),
        help: 'Curve interpolation.',
        type: '{string}',
        required: false,
        default: defaults.curve,
        controlType: 'choices',
        controlGroup: 'Base',
        controlOptions: {
            choices: areaCurvePropKeys.map(key => ({
                label: key,
                value: key,
            })),
        },
    },
    /*##################################################################################################################

        Styling

    ##################################################################################################################*/
    {
        key: 'colors',
        scopes: '*',
        description: 'Defines how to compute line color.',
        type: '{string|Function}',
        required: false,
        default: defaults.colors,
        controlType: 'colors',
        controlGroup: 'Style',
    },
    {
        key: 'fillOpacity',
        description: 'Layers fill opacity.',
        type: '{number}',
        required: false,
        default: defaults.fillOpacity,
        controlType: 'range',
        controlGroup: 'Style',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.05,
        },
    },
    {
        key: 'borderWidth',
        scopes: ['Stream', 'api'],
        description: 'Width of layer border.',
        type: '{number}',
        required: false,
        default: defaults.borderWidth,
        controlType: 'range',
        controlGroup: 'Style',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 10,
        },
    },
    {
        key: 'borderColor',
        scopes: ['Stream', 'api'],
        description: (
            <span>
                how to compute border color,{' '}
                <Link to="/guides/colors">see dedicated documentation</Link>.
            </span>
        ),
        help: 'Method to compute layer border color.',
        type: '{string|Function}',
        required: false,
        default: defaults.borderColor,
        controlType: 'color',
        controlGroup: 'Style',
        controlOptions: {
            withCustomColor: true,
        },
    },
    ...defsProperties(['Stream']),
    ...marginProperties,
    ...axesProperties,
    /*##################################################################################################################

        Grid

    ##################################################################################################################*/
    {
        key: 'enableGridX',
        scopes: '*',
        description: 'Enable/disable x grid.',
        type: '{boolean}',
        required: false,
        default: defaults.enableGridX,
        controlType: 'switch',
        controlGroup: 'Grid',
    },
    {
        key: 'enableGridY',
        scopes: '*',
        description: 'Enable/disable y grid.',
        type: '{boolean}',
        required: false,
        default: defaults.enableGridY,
        controlType: 'switch',
        controlGroup: 'Grid',
    },
    /*##################################################################################################################

        Interactivity

    ##################################################################################################################*/
    {
        key: 'isInteractive',
        scopes: ['Stream'],
        description: 'Enable/disable interactivity.',
        type: '{boolean}',
        required: false,
        default: defaults.isInteractive,
        controlType: 'switch',
        controlGroup: 'Interactivity',
    },
    {
        key: 'enableStackTooltip',
        scopes: ['Stream'],
        description: `Enable/disable stack tooltip ('isInteractive' must also be 'true').`,
        type: '{boolean}',
        required: false,
        default: defaults.enableStackTooltip,
        controlType: 'switch',
        controlGroup: 'Interactivity',
    },
    ...motionProperties(['Stream'], defaults),
]
