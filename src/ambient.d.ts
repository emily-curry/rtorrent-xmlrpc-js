declare module 'xmlrpc/lib/serializer' {
  export function serializeMethodCall(method: string, params: any[], encoding?: string): string;
}
declare module 'xmlrpc/lib/date_formatter' {
  namespace DateFormatter {
    function decodeIso8601(time: string): Date;
  }
  export default DateFormatter;
}
