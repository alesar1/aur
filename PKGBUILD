# Maintainer: Ian MacKay <immackay0@gmail.com>
# Prior Maintainer: Mikel Pintado <mikelaitornube2010@gmail.com>
# Contributor: Jiawen Geng

_pkgname='github-desktop'
pkgname="${_pkgname}-git"
pkgver=1.5.1_linux1
gitname="release-${pkgver//_/-}"
pkgrel=2
pkgdesc="GUI for managing Git and GitHub."
arch=('x86_64')
url="https://desktop.github.com"
license=('MIT')
depends=('gnome-keyring' 'git' 'curl' 'libxss' 'gconf')
optdepends=('hub: CLI interface for GitHub.')
makedepends=('xorg-server-xvfb' 'nodejs-lts-carbon' 'yarn' 'python2')
provides=(${_pkgname})
conflicts=(${_pkgname})
DLAGENTS=("https::/usr/bin/git clone --branch ${gitname} --single-branch %u")
source=(
  git+https://github.com/shiftkey/desktop.git
  ${_pkgname}.desktop
)
sha256sums=(
  'SKIP'
  2758e15659f5770ae2ac948250372135029e7ac2d4b6bf431a112dfdbcc681d1
)
pkgver() {
  cd desktop
  git describe --long --tags | sed 's/^release.//;s/\([^-]*-g\)/r\1/;s/-/./g'
}
build() {
  cd desktop
  export DISPLAY=':99.0'
  Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
  yarn install
  yarn build:prod
}
package() {
  install -d "${pkgdir}/opt/${_pkgname}"
  cp -r --preserve=mode desktop/dist/github-desktop-linux-x64/* "${pkgdir}/opt/${_pkgname}/"
  install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -Dm644 "desktop/app/static/logos/1024x1024.png" "${pkgdir}/usr/share/icons/hicolor/1024x1024/apps/${_pkgname}.png"
  install -Dm644 "desktop/app/static/logos/512x512.png" "${pkgdir}/usr/share/icons/hicolor/512x512/apps/${_pkgname}.png"
  install -Dm644 "desktop/app/static/logos/256x256.png" "${pkgdir}/usr/share/icons/hicolor/256x256/apps/${_pkgname}.png"
  printf "#!/bin/sh\n\n/opt/${_pkgname}/github-desktop \"\$@\"\n" | install -Dm755 /dev/stdin "${pkgdir}/usr/bin/${_pkgname}"
}
