# Maintainer:  Javier Torres <javitonino [at] gmail [dot] com>
# Contributor: Xiao-Long Chen <chenxiaolong@cxl.epac.to>

BUILD_SELINUX=false

pkgname=389-ds-base
pkgver=1.3.6.4
pkgrel=1
pkgdesc="389 Directory Server (base)"
arch=(i686 x86_64)
url="http://port389.org/"
license=(GPL)
depends=(cyrus-sasl cyrus-sasl-gssapi icu lm_sensors net-snmp libsystemd
         openldap perl-mozldap perl-netaddr-ip perl-socket 'svrcore>=4.1.2')
makedepends=(doxygen)

if [[ "${BUILD_SELINUX}" = "true" ]]; then
  depends+=(selinux-usr-policycoreutils)
fi
backup=(etc/default/dirsrv
        etc/default/dirsrv.systemd
        etc/dirsrv/config/certmap.conf
        etc/dirsrv/config/ldap-agent.conf
        etc/dirsrv/config/slapd-collations.conf
        etc/dirsrv/config/template-initconfig)
options=(!libtool)
install=${pkgname}.install
source=("http://www.port389.org/binaries/${pkgname}-${pkgver}.tar.bz2")
sha512sums=('e370270391d9e4bac4eb969380f76fbc715886a8f0b156433fee932d2701fbedd8f0460369a2878dd8f134ac5f35393ea2ea76b25cb24e91b744c1de2af3d879')

build() {
  cd "${pkgname}-${pkgver}"

  local selinux=""
  if [[ "${BUILD_SELINUX}" = "true" ]]; then
    selinux="--with-selinux"
  fi

  if [[ "${CARCH}" = "x86_64" ]]; then
    export USE_64=1
  fi

  ./autogen.sh

  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --sbindir=/usr/bin \
    --localstatedir=/var \
    --with-tmpfiles-d=/usr/lib/tmpfiles.d \
    --with-systemd \
    --with-systemdsystemunitdir=/usr/lib/systemd/system \
    --with-systemdsystemconfdir=/etc/systemd/system \
    --enable-autobind \
    --with-openldap \
    ${selinux} \
    #--disable-static

  make
}

check() {
  cd "${pkgname}-${pkgver}"
  make check
}

package() {
  cd "${pkgname}-${pkgver}"
  make -j1 DESTDIR="${pkgdir}/" install

  install -dm755 "${pkgdir}"/var/log/${pkgname}/ \
                 "${pkgdir}"/var/lib/${pkgname}/

  find "${pkgdir}" -type f -name '*.a' -delete
}
