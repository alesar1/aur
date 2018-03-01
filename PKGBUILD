# Maintainer:  Chris Severance aur.severach AatT spamgourmet.com
# Contributor: K0n24d <konrad AT knauber DOT net>

set -u
pkgname='urbackup2-client-no-gui'
pkgver='2.2.5'
pkgrel='1'
pkgdesc='Client/Server network backup for Windows Workgroups and Linux, headless client'
arch=('i686' 'x86_64' 'armv5' 'armv6h' 'armv6' 'armv7h' 'armv7' 'aarch64')
url='https://www.urbackup.org/'
license=('GPL')
depends=('crypto++' 'zlib')
makedepends=('gcc-libs' 'gcc' 'make')
conflicts=(urbackup{,2}-{client,client-no-gui}) #,server})
_verwatch=("${url}/download.html" '//hndl\.urbackup\.org/Client/[0-9\.]\+/urbackup-client-\([0-9\.]\+\)\.tar\.gz' 'l')
_scripts=(
  'btrfs_create_filesystem_snapshot'
  'btrfs_remove_filesystem_snapshot'
  'dattobd_create_filesystem_snapshot'
  'dattobd_remove_filesystem_snapshot'
  'lvm_create_filesystem_snapshot'
  'lvm_remove_filesystem_snapshot'
)
_srcdir="urbackup-client-${pkgver}.0"
source=("https://hndl.urbackup.org/Client/${pkgver}/urbackup-client-${pkgver}.tar.gz")
source+=("${_scripts[@]}" 'defaults_client')
sha256sums=('125180db455c6dd626e1facae77bad2f92b5f2570adfa7e4beeb922f39586d2c'
            '18b5eceb73086b86d904f80e9270df121d06d7c683f93c5449a82e7deb38e0ee'
            '334d9eb67a642d96e04874fd27c1b57d578c35b4cdc768d50db7ac2436f0927c'
            '869e6244efbf6e370938e2e5c94a16c0130f583815ddbd34802578656989048b'
            '23d6bdad352d33fe41acd50e0114f986cd4324c2c65ca16cea365cb99d90addd'
            'd5b462879e7c80139688c9d20ce1b1fe553386df9459def5e1d093d3a13d71fb'
            '0ffb3bbbf5faf939564681d24786767a4706132f2f081b7a870ecc718a8e9413'
            'd77fa6ad67141ae5cb4c3c6953783ce54aaaa3c1f2fe5bb28cd20948ddda12c4')

# These allow server and client to be installed on the same machine
_oldsig='urbackup_ecdsa409k1.pub'
_newsig='urbackup_client_ecdsa409k1.pub'
_oldver='version.txt'
_newver='version_client.txt'

prepare() {
  set -u
  cd "${_srcdir}"
  sed -e "s:\"${_oldsig}\":\"${_newsig}\":g" -i 'urbackupclient/ClientService.cpp'
  sed -e "s:\"${_oldver}\":\"${_newver}\":g" -i 'client/main.cpp' 'client/Info.cpp' 'urbackupclient/ClientServiceCMD.cpp' 'urbackupclient/ClientService.cpp'

  sed -e 's:byte digest:unsigned char digest:g' -i 'md5.h'
  cat >> 'cryptoplugin/cryptopp_inc.h' <<EOF

#if (CRYPTOPP_VERSION >= 600) && (__cplusplus >= 201103L)
    using byte = CryptoPP::byte;
#else
    typedef unsigned char byte;
#endif
EOF
  set +u
}

build() {
  set -u
  cd "${_srcdir}"
  local _makeopts=()
  if [ -z "${MAKEFLAGS:-}" ] || [ "${MAKEFLAGS//-j/}" = "${MAKEFLAGS}" ]; then
    local _nproc="$(nproc)"; _nproc=$((_nproc>8?8:_nproc))
    _makeopts=(-j "${_nproc}")
  fi
  if [ ! -s 'Makefile' ]; then
    #CFLAGS='-march=native -O2 -pipe -fstack-protector-strong' \\
    #CXXFLAGS="${CFLAGS} -ansi" \\
    ./configure --prefix='/usr' --sbindir='/usr/bin' --localstatedir='/var' --sysconfdir='/etc' --enable-headless
  fi
  nice make -s "${_makeopts[@]}"
  set +u
}

package() {
  set -u
  cd "${_srcdir}"

  make -s -j1 DESTDIR="${pkgdir}" install

  install -Dpm644 'urbackupclientbackend-debian.service' "${pkgdir}/usr/lib/systemd/system/urbackupclientbackend.service"
  install -Dpm644 'docs/urbackupclientbackend.1' -t "${pkgdir}/usr/share/man/man1/"

  cd "${srcdir}"
  install -Dpm644 'defaults_client' "${pkgdir}/etc/default/urbackupclient"
  install -Dpm700 "${_scripts[@]}" -t "${pkgdir}/usr/share/urbackup/"

  mv "${pkgdir}/usr/share/urbackup/${_oldsig}" "${pkgdir}/usr/share/urbackup/${_newsig}"
  mv "${pkgdir}/var/urbackup/${_oldver}" "${pkgdir}/var/urbackup/${_newver}"
  set +u
}
set +u
# vim: ts=2
