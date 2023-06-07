// Decorador de registro de método
export function logMethod(target: any, key: string, descriptor: PropertyDescriptor) 
{
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      console.log(`Método llamado: ${key}`);
      const result = originalMethod.apply(this, args);
      return result;
    };
  
    return descriptor;
}
  