# Maintainer: WorMzy Tykashi <wormzy.tykashi@gmail.com>
# Contributor: OK100 <ok100 at lavabit dot com>
# Contributor: Valère Monseur <valere dot monseur at ymail dot com>

_BUILDOPTS='' # Prevent environment variables breaking build
pkgname=compton-git
_gitname=compton
epoch=2
pkgver=590_Next_2018.11.02
pkgrel=1
pkgdesc="X Compositor (a fork of xcompmgr-dana) (git-version)"
arch=(i686 x86_64)
url="https://github.com/yshui/compton"
license=('MIT' 'MPL2')
depends=('libgl' 'libev' 'pcre' 'libx11' 'xcb-util-renderutil' 'libxcb' 'xcb-util-image' 'libxext'
         'pixman' 'libconfig' 'libdbus' 'hicolor-icon-theme')
makedepends=('git' 'mesa' 'meson')
optdepends=('dbus:          To control compton via D-Bus'
            'xorg-xwininfo: For compton-trans'
            'xorg-xprop:    For compton-trans'
            'python:        For compton-convgen.py')
provides=('compton')
conflicts=('compton')
source=(git+"https://github.com/yshui/compton.git#branch=next")
md5sums=("SKIP")

# Upstream disables manpage generation by default, to enable, uncomment the next two lines
#makedepends+=('asciidoc')
#_BUILDOPTS='-Dbuild_docs=true'

pkgver() {
    cd ${_gitname}
    _tag=$(git describe --tags | sed 's:^v::') # tag is mobile, and switches between numbers and letters, can't use it for versioning
    _commits=$(git rev-list --count HEAD) # total commits is the most sane way of getting incremental pkgver
    _date=$(git log -1 --date=short --pretty=format:%cd)
    printf "%s_%s_%s\n" "${_commits}" "${_tag}" "${_date}" | sed 's/-/./g'
}

build() {
  cd "${srcdir}/${_gitname}"
  meson --buildtype=release . build --prefix=/usr ${_BUILDOPTS}
  ninja -C build
}

package() {
  cd "${srcdir}/${_gitname}"

  DESTDIR="${pkgdir}" ninja -C build install

  # install license
  install -D -m644 "LICENSES/MIT" "${pkgdir}/usr/share/licenses/${_gitname}/LICENSE-MIT"

  # example conf
  install -D -m644 "compton.sample.conf" "${pkgdir}/etc/xdg/compton.conf.example"
}
