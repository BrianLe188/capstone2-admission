// Original file: admission/subject.proto

import type { Subject as _subject_Subject, Subject__Output as _subject_Subject__Output } from '../subject/Subject';

export interface SubjectResponse {
  'major'?: (_subject_Subject | null);
  'error'?: (string);
}

export interface SubjectResponse__Output {
  'major': (_subject_Subject__Output | null);
  'error': (string);
}
