import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    code: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    output: Schema.Attribute.Text;
  };
}

export interface DetailsDetails extends Struct.ComponentSchema {
  collectionName: 'components_details_details';
  info: {
    description: '';
    displayName: 'details';
    icon: 'arrowLeft';
  };
  attributes: {
    code: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    output: Schema.Attribute.Text;
    topic: Schema.Attribute.Text;
  };
}

export interface DetailsInside extends Struct.ComponentSchema {
  collectionName: 'components_details_insides';
  info: {
    displayName: 'inside';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface TopicTopic extends Struct.ComponentSchema {
  collectionName: 'components_topic_topics';
  info: {
    description: '';
    displayName: 'topic';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

export interface VideoTopicsVideoTopics extends Struct.ComponentSchema {
  collectionName: 'components_video_topics_video_topics';
  info: {
    description: '';
    displayName: 'videoTopics';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    Name: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.content': ContentContent;
      'details.details': DetailsDetails;
      'details.inside': DetailsInside;
      'topic.topic': TopicTopic;
      'video-topics.video-topics': VideoTopicsVideoTopics;
    }
  }
}
