# Maintainer: Solomon Choina <shlomochoina@gmail.com>
pkgname=terminus-terminal
_pkgname=terminus
_pkgver=1.0.0
pkgver=1.0.0.39
pkgrel=1
alpha=39
pkgdesc="A terminal for a more modern age"
arch=('x86_64')
url="https://github.com/Eugeny/terminus"
license=('MIT')
depends=('nodejs')
#makedepends=('git' 'npm' 'yarn') # 'bzr', 'git', 'mercurial' or 'subversion'
provides=("terminus-terminal")
conflicts=("terminus-terminal")
replaces=('terminus-terminal')
source=("$url/releases/download/v${_pkgver}-alpha.$alpha/${_pkgname}_${_pkgver}-alpha.${alpha}_amd64.deb")
sha256sums=('af83a4e9ac68143e1ccfc077627bb9bbc64bc59606634e7264f53c5f5a19d83d')

pkgver(){
  echo ${_pkgver}.${alpha}
}
package() {
  cd "$srcdir/"
  tar -xf data.tar.xz
  cp -r usr/ $pkgdir
  cp -r opt/ $pkgdir

 install -Dm755 /dev/stdin "$pkgdir"/usr/bin/$_pkgname <<END
  #!/usr/bin/bash
  /opt/Terminus/terminus

END

}
