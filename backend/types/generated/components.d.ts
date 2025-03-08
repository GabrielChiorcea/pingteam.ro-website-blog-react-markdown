import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutStrongPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_strong_points';
  info: {
    description: '';
    displayName: 'aboutStrongPoints';
    icon: 'check';
  };
  attributes: {
    aboutPoints: Schema.Attribute.Text;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: '';
    displayName: 'featureItem';
    icon: 'arrowUp';
  };
  attributes: {
    featureItemDescription: Schema.Attribute.Text;
    featureItemImg: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    featureItemTitle: Schema.Attribute.String;
  };
}

export interface SharedFqa extends Struct.ComponentSchema {
  collectionName: 'components_shared_fqas';
  info: {
    displayName: 'fqa';
    icon: 'question';
  };
  attributes: {
    questionAndAnswer: Schema.Attribute.Component<
      'shared.question-and-answer',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuestionAndAnswer extends Struct.ComponentSchema {
  collectionName: 'components_shared_question_and_answers';
  info: {
    displayName: 'questionAndAnswer';
    icon: 'arrowRight';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServicesStrongPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_strong_points';
  info: {
    displayName: 'servicesStrongPoints';
    icon: 'check';
  };
  attributes: {
    serviceStrongPoint: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_shared_technologies';
  info: {
    displayName: 'technologies';
    icon: 'command';
  };
  attributes: {
    technology: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-strong-points': SharedAboutStrongPoints;
      'shared.feature-item': SharedFeatureItem;
      'shared.fqa': SharedFqa;
      'shared.media': SharedMedia;
      'shared.question-and-answer': SharedQuestionAndAnswer;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services-strong-points': SharedServicesStrongPoints;
      'shared.slider': SharedSlider;
      'shared.technologies': SharedTechnologies;
    }
  }
}
