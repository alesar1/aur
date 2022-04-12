# Maintainer: Donald Carr<sirspudd@gmail.com>
# Upstream URL: http://qpm.io
#
# For improvements/fixes to this package, please send a pull request:
# https://github.com/Cutehacks/qpm

pkgname=qpm-git
pkgver=v0.11.0.r7.g855d71e
pkgrel=1
pkgdesc='Qt Package Manager'
arch=('x86_64' 'i686')
url='http://qpm.io'
license=('LGPL')
provides=('qpm-git')
makedepends=('go' 'git')
source=("qpm.io::https://github.com/Cutehacks/qpm")
sha256sums=('SKIP')

pkgver() {
  local _qpm_dir="${srcdir}/qpm.io"
  cd ${_qpm_dir}

  git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  local _qpm_dir="${srcdir}/qpm.io"
  cd ${_qpm_dir}

  git submodule init
  git submodule update
}

build() {
  local _qpm_dir="${srcdir}/qpm.io"
  cd $_qpm_dir
  local git_sha1=$(git rev-parse HEAD | cut -c1-8)

  cd $srcdir
  export GOPATH="$srcdir/.."
  go build -ldflags "-X qpm.io/qpm/core.Version=${pkgver} -X qpm.io/qpm/core.Build=${git_sha1}" qpm.io/qpm
}

package() {
  cd $srcdir
  install -Dm755 qpm "${pkgdir}/usr/bin/${pkgname}"
}
