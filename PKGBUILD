# Maintainer: Mubashshir <ahmubashshir@gmail.com>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Andrea Zucchelli <zukka77@gmail.com>
# Contributor: Daniel Micay <danielmicay@gmail.com>
# Contributor: Jonathan Liu <net147@gmail.com>
# Contributor: Jon Nordby <jononor@gmail.com>

pkgname=lxc-anbox
pkgver=4.0.6
pkgrel=1
pkgdesc="Linux Containers"
arch=('x86_64')
url="https://linuxcontainers.org"
provides=('lxc=1:4.0.6')
conflicts=('lxc' 'lxc-git')
depends=('bash' 'perl' 'libseccomp' 'libcap' 'python' 'rsync' 'wget')
makedepends=('docbook2x' 'lua' 'python-setuptools' 'apparmor')
optdepends=('dnsmasq: lxc-net.service'
	    'lua'
	    'lua-filesystem: lxc-top'
	    'lua-alt-getopt: lxc-top')
license=('LGPL')
options=('emptydirs')
backup=('etc/lxc/default.conf'
	'etc/default/lxc')
validpgpkeys=('602F567663E593BCBD14F338C638974D64792D67')
source=("https://linuxcontainers.org/downloads/${pkgname%-*}/${pkgname%-*}-${pkgver}.tar.gz"{,.asc}
	"lxc.tmpfiles.d"
	"lxc.service"
	"lxc-auto.service")
sha256sums=('9165dabc0bb6ef7f2fda2009aee90b20fbefe77ed8008347e9f06048eba1e463'
            'SKIP'
            '10e4f661872f773bf3122a2f9f2cb13344fea86a4ab72beecb4213be4325c479'
            'bbe7e0447bc3bf5f75f312c34d647f5218024731628a5e8633b1ea1801ebe16b'
            'b31f8d6b301ab9901b43f2696bcd0babb32b96e4a59fab63a2d642e43bf26bb3')

prepare() {
  cd "$srcdir/${pkgname%-*}-${pkgver/_/-}"
  sed -i \
    -e 's|"\\"-//Davenport//DTD DocBook V3.0//EN\\""|"\\"-//OASIS//DTD DocBook XML\\" \\"https://www.oasis-open.org/docbook/xml/4.5/docbookx.dtd\\""|' \
    configure.ac
}

build() {
  cd "$srcdir/${pkgname%-*}-${pkgver/_/-}"
  ./autogen.sh
  bashcompdir=/usr/share/bash-completion/completions ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --localstatedir=/var \
    --libexecdir=/usr/lib \
    --libdir=/usr/lib \
    --sysconfdir=/etc \
    --enable-apparmor \
    --enable-seccomp \
    --enable-capabilities \
    --with-init-script=systemd \
    --with-systemdsystemunitdir=/usr/lib/systemd/system \
    --enable-pam \
    --disable-werror \
    --with-pamdir=/usr/lib/security
  make
}

package() {
  cd "$srcdir/${pkgname%-*}-${pkgver/_/-}"

  make DESTDIR="$pkgdir" install
  install -d -m755 "$pkgdir/var/lib/lxc"
  install -d -m755 "$pkgdir/usr/lib/lxc/rootfs/dev"
  install -D -m644 "$srcdir"/lxc.service "$pkgdir"/usr/lib/systemd/system/lxc@.service
  install -D -m644 "$srcdir"/lxc-auto.service "$pkgdir"/usr/lib/systemd/system/lxc-auto.service
  install -D -m644 "$srcdir"/lxc.tmpfiles.d "$pkgdir"/usr/lib/tmpfiles.d/lxc.conf

  cd doc
  find . -type f -name '*.1' -exec install -D -m644 "{}" "$pkgdir/usr/share/man/man1/{}" \;
  find . -type f -name '*.5' -exec install -D -m644 "{}" "$pkgdir/usr/share/man/man5/{}" \;
  find . -type f -name '*.7' -exec install -D -m644 "{}" "$pkgdir/usr/share/man/man7/{}" \;
}
