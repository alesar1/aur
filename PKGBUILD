# Maintainer: Allen Zhong <moeallenz@gmail.com>
# Contributor: Chris Darnell <cedeel@gmail.com>
# Contributor: Sébastien Luttringer
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: judd <jvinet@zeroflux.org>
# Contributor: Mario Vazquez <mario_vazq@hotmail.com>

pkgbase=bind-rl
pkgname=(bind-rl bind-rl-tools)
_pkgver=9.16.25
pkgver=${_pkgver//-/.}
pkgrel=1
url='https://www.isc.org/software/bind/'
license=('MPL2')
arch=('x86_64')
options=('!emptydirs')
makedepends=('libcap' 'libxml2' 'zlib' 'krb5' 'e2fsprogs' 'openssl' 'readline'
  'libidn2' 'dnssec-anchors' 'python' 'json-c' 'python-ply' 'lmdb' 'zlib' 'icu'
  'xz' 'libmaxminddb' 'libnsl' 'libuv')
validpgpkeys=('7E1C91AC8030A5A59D1EFAB9750F3C87723E4012') #ISC Code Signing Key 2019 – 2020 (codesign@isc.org)
source=("https://ftp.isc.org/isc/bind9/${_pkgver}/bind-${_pkgver}.tar.xz"{,.asc}
        'tmpfiles.conf'
        'sysusers.conf'
        'named.conf'
        'named.service'
        'localhost.zone'
        'localhost.ip6.zone'
        '127.0.0.zone')
sha256sums=('9fa328850f82843ef8b7bf1ff5322cb68b110273a33f375ba41f35270f5e1ff3'
            'SKIP'
            'f0423c4ee8495da487e07e9144bec1d25f46a0cd2dfa7cfd7a761ef15bfefc98'
            '7c0acefcfcc3ae093550caed7ec90fe84bec8f7477459ffa7e71dda76bcbdb2c'
            'e08a01d41b18bdb771d534daca99642314939aafdb088e5cfcf0ef2d33f8e7eb'
            '3f0f8db0a1deae270dd166b4750be7c1041b4b44891176f35a8df7dd55d24d34'
            '0011708e516128647dd25b59b6ebc465f36e85bbe0a8fbdc3eb04b7f28c2197f'
            'c06fc270e32a843c8b6d86335a2ec607d405dfba6875de8d8a9abde39a9e2c17'
            'b88fd2b99e7d42d414b329b814b9ff3304fa0ef9c67df81bde235bbfa0f3a3b8')

prepare() {
  cd bind-$_pkgver
  # apply patch from the source array (should be a pacman feature)
  local src
  for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    [[ $src = *.patch ]] || continue
    msg2 "Applying patch $src..."
    patch -Np1 < "../$src"
  done
}

build() {
  cd bind-$_pkgver
  export CFLAGS
  # support to chase DNSSEC signature chains
  CFLAGS+=' -DDIG_SIGCHASE'
  # compile with gcc10, https://gcc.gnu.org/gcc-10/porting_to.html
  CFLAGS+=' -fcommon'
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --sbindir=/usr/bin \
    --localstatedir=/var \
    --disable-static \
    --enable-fixed-rrset \
    --enable-full-report \
    --enable-dnsrps \
    --enable-rrl \
    --with-python=/usr/bin/python \
    --with-maxminddb \
    --with-openssl \
    --with-libidn2 \
    --with-json-c \
    --with-libxml2 \
    --with-lmdb \
    --with-libtool
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package_bind-rl() {
  pkgdesc='The ISC DNS Server, with Response Rate Limit (RRL) enabled'
  provides=('dns-server' "bind=$pkgver")
  depends=('glibc' 'libxml2' 'libcap' 'openssl' 'json-c' 'bind-tools' 'zlib'
           'lmdb' 'libmaxminddb')
  conflicts=('bind')
  replaces=('bind')
  backup=('etc/named.conf'
          'var/named/127.0.0.zone'
          'var/named/localhost.zone'
          'var/named/localhost.ip6.zone')
  install=bind.install

  cd "bind-$_pkgver"
  install -dm755 "$pkgdir/usr/share/licenses/$pkgname/"
  install -Dm644 LICENSE COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname/"
  for _d in bin/{check,confgen,named,rndc}; do
    (cd "$_d" && make DESTDIR="$pkgdir" install)
  done

  cd "$srcdir"
  install -D -m644 tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
  install -D -m644 sysusers.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"

  install -D -m644 named.service "$pkgdir/usr/lib/systemd/system/named.service"
  install -D -m640 -o 0 -g 40 named.conf "$pkgdir/etc/named.conf"

  install -d -m770 -o 0 -g 40 "$pkgdir/var/named"
  install    -m640 -o 0 -g 40 localhost.zone "$pkgdir/var/named"
  install    -m640 -o 0 -g 40 localhost.ip6.zone "$pkgdir/var/named"
  install    -m640 -o 0 -g 40 127.0.0.zone "$pkgdir/var/named"
}

package_bind-rl-tools() {
  pkgdesc='The ISC DNS tools'
  depends=('glibc' 'libcap' 'libxml2' 'zlib' 'krb5' 'e2fsprogs' 'python' 'bash'
           'openssl' 'readline' 'libidn2' 'dnssec-anchors' 'json-c' 'lmdb' 'xz'
           'icu' 'python-ply' 'libmaxminddb')
  optdepends=('python: for python scripts')
  conflicts=('dnsutils' 'bind-tools')
  replaces=('dnsutils' 'host' 'bind-tools')
  provides=("dnsutils=$pkgver" "bind-tools=$pkgver")

  cd "bind-$_pkgver"
  install -Dm644 COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  make DESTDIR="$pkgdir" SUBDIRS="" install
  (cd lib && make DESTDIR="$pkgdir" install)
  for _d in bin/{dig,dnssec,delv,nsupdate,python,tools}; do
    (cd "$_d" && make DESTDIR="$pkgdir" install)
  done
}

