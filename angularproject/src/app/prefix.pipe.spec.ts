import { PrefixPipe } from './prefix.pipe';

describe('PrefixPipe', () => {
  
  
  it('create an instance', () => {
    const pipe = new PrefixPipe();
    expect(pipe).toBeTruthy();
  });


  it('should return same value if prefix is not supplied',()=>{
    const pipe= new PrefixPipe();
    let original='book.png';

    expect(pipe.transform(original)).toBe(original);
  });

  it('should return prefixed original if prefix is supplied',()=>{
    const pipe=new PrefixPipe();
    let original='book.png';
    let prefix='/images/';

    expect(pipe.transform(original,prefix)).toBe(prefix+original);
  });

});
