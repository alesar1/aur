# Maintainer: Chris Severance aur.severach aATt spamgourmet dott com
# Based on the Arch Linux PKGBUILD by:
# Contributor: Sergej Pupykin
# Maintainer: Tobias Powalowski <tpowa@archlinux.org>

set -u
_pkgname='vde2'
pkgname='vde2-dosemu2'
pkgver='2.3.2'
pkgrel='1'
pkgdesc='Virtual Distributed Ethernet for emulators like qemu, patched for dosemu2'
arch=('i686' 'x86_64')
url='http://sourceforge.net/projects/vde/'
license=('GPL' 'LGPL' 'custom')
depends=('bash' 'libpcap' 'openssl')
makedepends=('python' 'git')
provides=("vde2=${pkgver}")
conflicts=('vde2')
options=('!makeflags')
install="${_pkgname}.install"
_srcdir="${_pkgname}-${pkgver}"
source=(
  "https://downloads.sourceforge.net/project/vde/${_pkgname}/${pkgver}/${_pkgname}-${pkgver}.tar.bz2"
  'dhcpd.conf.sample'
  'iptables.rules.sample'
  'vde-config.sample'
  'vde-connection.sample'
  "git+https://github.com/stsp/dosemu2.git"
)
sha256sums=('cbea9b7e03097f87a6b5e98b07890d2275848f1fe4b9fcda77b8994148bc9542'
            'da0e2766dc63069da929c28126831ad5fdddcc4a04105a21217d78832c7ca1bc'
            '99076d7466cd99673dbe91ef83865187e7868177959b38e125df63eea957f83e'
            '5727c215646333c37b26388146cd3e6b3814b88d60d54051d7da99e00c0aef87'
            '5139110ed6d5d1174bf12971512dac5196d9d07df46dd393d7b1cd083118fe9b'
            'SKIP')

prepare() {
  set -u
  cd "${_srcdir}"
  patch -d 'src/slirpvde/' -b -p2 -i "${srcdir}/dosemu2/src/plugin/vde/patches/0001-slirp-Forward-ICMP-echo-requests-via-unprivileged-so.patch"
  local _ptf
  for _ptf in 'atty.diff' 'flags.diff' 'msg.diff'; do
    patch -b -p0 -i "${srcdir}/dosemu2/src/plugin/vde/patches/${_ptf}"
  done
  CFLAGS="${CFLAGS} -Wno-unused-result" \
  ./configure --prefix='/usr' --sbindir='/usr/bin' --sysconfdir='/etc' --libexecdir='/usr/lib/vde2' \
             --enable-experimental
  set +u
}

build() {
  set -u
  cd "${_srcdir}"
  make -s -j1 # V=1
  set +u
}

package() {
  set -u
  cd "${_srcdir}"
  make prefix="${pkgdir}/usr" sysconfdir="${pkgdir}/etc" sbindir="${pkgdir}/usr/bin" libexecdir="${pkgdir}/usr/lib/vde2" install
  install -Dpm644 "${srcdir}/"{vde-config.sample,vde-connection.sample} -t "${pkgdir}/etc/vde/"
  install -Dpm644 "${srcdir}/"{dhcpd.conf.sample,iptables.rules.sample} -t "${pkgdir}/usr/share/vde2/"
  # install slirp license
  install -Dpm644 'COPYING.slirpvde' -t "${pkgdir}/usr/share/licenses/vde2/"
  set +u
}
set +u
