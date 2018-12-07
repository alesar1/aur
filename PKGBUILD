# Maintainer: Kyle Sferrazza <kyle.sferrazza@gmail.com>

pkgname='powershell-git'
_pkgname='powershell'
_binaryname='pwsh'
pkgver=6.2.0.preview.2.60.gb55dc807c
pkgrel=1
pkgdesc='A cross-platform automation and configuration tool/framework (git version)'
arch=('x86_64')
url='https://github.com/PowerShell/PowerShell'
license=('MIT')
makedepends=('git' 'cmake' 'dotnet-sdk>=2.0' 'patch')
depends=('icu' 'libunwind' 'openssl-1.0')
provides=('powershell')
conflicts=('powershell')
source=($_pkgname::'git+https://github.com/PowerShell/PowerShell.git'
        'pester::git+https://github.com/PowerShell/psl-pester.git#branch=develop'
        'googletest::git+https://github.com/google/googletest.git'
        build.sh)
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         '70d89b489a4ae0198b9f8dbeb7bb9c40')
install=powershell.install

pkgver() {
  cd $_pkgname
  git describe --tags --long | sed 's/^v//;s/-/./;s/-/./g'
}

prepare() {
  cd $_pkgname
  git submodule init
  git config submodule.src/Modules/Pester.url "$srcdir"/pester
  git config submodule.src/libpsl-native/test/googletest.url "$srcdir"/googletest
  git submodule update
  git clean -dfx

  rm global.json
}

build() {
  cd $_pkgname
  TERM=xterm $srcdir/build.sh
}

package() {
  cd "$_pkgname/src/powershell-unix"

  mkdir -p "$pkgdir/usr/lib/$_pkgname"
  cp -a "bin/Linux/netcoreapp2.1/linux-x64" "$pkgdir/usr/lib/$_pkgname"
  chmod 755 $pkgdir/usr/lib/$_pkgname/linux-x64/$_binaryname

  mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
  cp "../../LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  mkdir -p "$pkgdir/usr/bin"
  ln -s "/usr/lib/$_pkgname/linux-x64/$_binaryname" "$pkgdir/usr/bin/$_binaryname"

  chmod 644 \
    "$pkgdir/usr/lib/powershell/linux-x64/libhostfxr.so" \
    "$pkgdir/usr/lib/powershell/linux-x64/libhostpolicy.so" \
    "$pkgdir/usr/lib/powershell/linux-x64/en-US/default.help.txt" \
    "$pkgdir/usr/lib/powershell/linux-x64/Modules/PSDesiredStateConfiguration/PSDesiredStateConfiguration.psm1"
}
