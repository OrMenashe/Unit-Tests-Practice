import {Type} from "@angular/core";

export type Spied<T> = {
  [Method in keyof T]: any;
};

export function spyOnClass(spiedClass: Type<any>) {
  const { prototype } = spiedClass;
  const propertiesDescriptors = Object.getOwnPropertyNames(prototype).map((name) => [name, Object.getOwnPropertyDescriptor(prototype, name)]);
  const methods = propertiesDescriptors
    .filter(([, descriptor]) => {
      // @ts-ignore
      return "value" in descriptor ? descriptor.value instanceof Function : false;
    })
    .map(([name]) => name);
  const getters = propertiesDescriptors
    .filter(([, descriptor]) => {
      // @ts-ignore
      return !!descriptor.get;
    })
    .map(([name]) => name);
  return jasmine.createSpyObj('spy', [...methods, ...getters]);
}

export function provideMock(spiedClass: Type<any>) {
  return {
    provide: spiedClass,
    useValue: spyOnClass(spiedClass),
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZS1tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGVzdGluZy91bml0LXRlc3RzL3NyYy9qYXNtaW5lL3Byb3ZpZGUtbW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLFVBQVUsVUFBVSxDQUFJLFVBQW1CO0lBQy9DLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFFakMsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUNyRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUNuRSxDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUcscUJBQXFCO1NBQ2xDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFO1FBQ3pCLE9BQVEsVUFBaUMsQ0FBQyxLQUFLLFlBQVksUUFBUSxDQUFDO0lBQ3RFLENBQUMsQ0FBQztTQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpCLE1BQU0sT0FBTyxHQUFHLHFCQUFxQjtTQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRTtRQUN6QixPQUFPLENBQUMsQ0FBRSxVQUFpQyxDQUFDLEdBQUcsQ0FBQztJQUNsRCxDQUFDLENBQUM7U0FDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QixPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFJLFVBQW1CO0lBSWhELE9BQU87UUFDTCxPQUFPLEVBQUUsVUFBVTtRQUNuQixRQUFRLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQztLQUNqQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaWVkIH0gZnJvbSAnLi4vbW9kZWxzL3NwaWVkLm1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNweU9uQ2xhc3M8VD4oc3BpZWRDbGFzczogVHlwZTxUPik6IFNwaWVkPFQ+IHtcbiAgY29uc3QgeyBwcm90b3R5cGUgfSA9IHNwaWVkQ2xhc3M7XG5cbiAgY29uc3QgcHJvcGVydGllc0Rlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG90eXBlKS5tYXAoXG4gICAgKG5hbWUpID0+IFtuYW1lLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgbmFtZSldXG4gICk7XG5cbiAgY29uc3QgbWV0aG9kcyA9IHByb3BlcnRpZXNEZXNjcmlwdG9yc1xuICAgIC5maWx0ZXIoKFssIGRlc2NyaXB0b3JdKSA9PiB7XG4gICAgICByZXR1cm4gKGRlc2NyaXB0b3IgYXMgUHJvcGVydHlEZXNjcmlwdG9yKS52YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICAgIH0pXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKTtcblxuICBjb25zdCBnZXR0ZXJzID0gcHJvcGVydGllc0Rlc2NyaXB0b3JzXG4gICAgLmZpbHRlcigoWywgZGVzY3JpcHRvcl0pID0+IHtcbiAgICAgIHJldHVybiAhIShkZXNjcmlwdG9yIGFzIFByb3BlcnR5RGVzY3JpcHRvcikuZ2V0O1xuICAgIH0pXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKTtcblxuICByZXR1cm4gamFzbWluZS5jcmVhdGVTcHlPYmooJ3NweScsIFsuLi5tZXRob2RzLCAuLi5nZXR0ZXJzXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTW9jazxUPihzcGllZENsYXNzOiBUeXBlPFQ+KToge1xuICBwcm92aWRlOiBUeXBlPFQ+O1xuICB1c2VWYWx1ZTogU3BpZWQ8VD47XG59IHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBzcGllZENsYXNzLFxuICAgIHVzZVZhbHVlOiBzcHlPbkNsYXNzKHNwaWVkQ2xhc3MpLFxuICB9O1xufVxuIl19
