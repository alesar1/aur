# Linux Arch maintainer: Serge Victor <arch@random.re>
# Contributors:  
# - Krzysztof Wloch <wloszekk [at] gmail [dot] com>
# - Luke McCarthy <luke@iogopro.co.uk>

pkgname=fasm
pkgver=1.71.39
pkgrel=1
pkgdesc="Fast and efficient self-assembling x86 assembler for DOS, Windows and Linux operating systems"
arch=('x86_64')
url="http://www.flatassembler.net/"
license=('custom')
source=(http://www.flatassembler.net/$pkgname-$pkgver.tgz)
md5sums=(''22a100b479e350efc8a8c2d814c1ee67)
makedepends=('gcc')

if test "$CARCH" == x86_64; then
  makedepends=('gcc-multilib' 'libtool-multilib')
  depends=('lib32-glibc')
fi

build() {
    cd "$srcdir/fasm"

    # compile fasm with itself
    ./fasm source/libc/$pkgname.asm
    gcc -m32 -L/usr/lib32 source/libc/$pkgname.o -o source/libc/$pkgname

    # tools
    local s
    for s in listing prepsrc symbols; do
        ./source/libc/$pkgname tools/libc/$s.asm $s.o
    gcc -m32 -o $s $s.o
    done

}

package() {
    cd "$srcdir/$pkgname"
    mkdir -p $pkgdir/usr/bin
    mkdir -p $pkgdir/usr/share/licenses/$pkgname
    mkdir -p $pkgdir/usr/share/doc/$pkgname/examples/elfexe/dynamic
    mkdir -p $pkgdir/usr/share/doc/$pkgname/examples/libcdemo
    mkdir -p $pkgdir/usr/share/doc/$pkgname/examples/elfobj
    install -m755 source/libc/$pkgname $pkgdir/usr/bin
    install -m644 license.txt $pkgdir/usr/share/licenses/$pkgname/LICENSE

    # tools
    local s
        for s in listing prepsrc symbols; do
        install -D $s $pkgdir/usr/bin/$pkgname-$s
    done

    # docs
    cp $pkgname.txt whatsnew.txt $pkgdir/usr/share/doc/$pkgname
    cp examples/elfexe/*.asm $pkgdir/usr/share/doc/$pkgname/examples/elfexe/
    cp examples/elfexe/dynamic/*.asm $pkgdir/usr/share/doc/$pkgname/examples/elfexe/dynamic
    cp examples/elfexe/dynamic/*.inc $pkgdir/usr/share/doc/$pkgname/examples/elfexe/dynamic
    cp examples/elfobj/*.asm $pkgdir/usr/share/doc/$pkgname/examples/elfobj/
    cp examples/libcdemo/*.asm $pkgdir/usr/share/doc/$pkgname/examples/libcdemo/
    cp examples/libcdemo/*.inc $pkgdir/usr/share/doc/$pkgname/examples/libcdemo/
}

# vim:set ts=2 sw=2 et:
