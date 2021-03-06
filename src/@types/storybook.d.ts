import { Component, AsyncComponent } from 'vue';
import { Args as DefaultArgs, Annotations, BaseMeta, BaseStory } from '@storybook/addons';

export declare type StoryFnVueReturnType = string | Component;

export { Args, ArgTypes, Parameters, StoryContext } from '@storybook/addons';
declare type VueComponent = Component<any, any, any, any> | AsyncComponent<any, any, any, any>;
declare type VueReturnType = StoryFnVueReturnType;
/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export declare type Meta<Args = DefaultArgs> = BaseMeta<VueComponent> &
  Annotations<Args, VueReturnType>;
/**
 * Story function that represents a component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export declare type Story<Args = DefaultArgs> = BaseStory<Args, VueReturnType> &
  Annotations<Args, VueReturnType>;
