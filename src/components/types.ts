interface TimelineItem {
  parent?: boolean;
  active?: boolean;
  text: string;
}

function TimelineItems(this: TimelineItem[]) {}

export { TimelineItems, TimelineItem };
