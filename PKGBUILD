# Maintainer: Shalygin Konstantin <k0ste@k0ste.ru>
# Contributor: Shalygin Konstantin <k0ste@k0ste.ru>

pkgname='frr'
pkgver='4.0'
pkgrel='1'
pkgdesc='FRRouting (quagga fork) supports BGP4, OSPFv2, OSPFv3, ISIS, RIP, RIPng, PIM, LDP, NHRP and EIGRP.'
arch=('any')
url="https://frrouting.org/"
license=('GPL2')
depends=('libcap' 'libnl' 'readline' 'ncurses' 'perl' 'json-c' 'net-snmp')
makedepends=('patch' 'gcc' 'net-snmp' 'json-c' 'bison' 'c-ares' 'perl-xml-libxml' 'rtrlib')
conflicts=('quagga' 'quagga_cumulus')
provides=('quagga' 'quagga_cumulus')
source=("https://github.com/FRRouting/${pkgname}/archive/${pkgname}-${pkgver}.tar.gz"
        "${pkgname}.sysusers"
        "${pkgname}.tmpfiles"
        "${pkgname}_3.0_systemd_arch.patch")
sha256sums=('a9932ef116106d56b0e17aa569aa56a458acdd50e0d07c042fd5cc725bf742cc'
            '9371cc0522d13621c623b5da77719052bdebdceb7ffdbdc06fc32a2f07118e7e'
            '6f8dd86ef9c600763faead3052908531e8dc8ef67058e6f7f8da01bf0fe4eb89'
            'caf47e9efa48678121437f41aaa0e8b1bf3f212539082b2b07e0de6b6b9c7ba3')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgname}-${pkgver}"

  # https://github.com/FRRouting/frr/issues/1422
  patch -p1 -i "${srcdir}/${pkgname}_3.0_systemd_arch.patch"

  autoreconf -fvi
  ./configure \
    --prefix="/usr" \
    --sbindir="/usr/bin" \
    --sysconfdir="/etc/${pkgname}" \
    --localstatedir="/run/${pkgname}" \
    --enable-exampledir="/etc/${pkgname}" \
    --enable-ldpd \
    --disable-watchfrr \
    --enable-snmp="agentx" \
    --enable-multipath=256 \
    --enable-user="${pkgname}" \
    --enable-group="${pkgname}" \
    --enable-vty-group="${pkgname}vty" \
    --enable-configfile-mask="0640" \
    --enable-logfile-mask="0640" \
    --enable-shell-access \
    --enable-pcreposix \
    --enable-systemd \
    --enable-poll="yes" \
    --enable-shared \
    --enable-irdp \
    --enable-rpki
}

build() {
  cd "${srcdir}/${pkgname}-${pkgname}-${pkgver}"
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm0644 "zebra/GNOME-PRODUCT-ZEBRA-MIB" "${pkgdir}/usr/share/snmp/mibs/GNOME-PRODUCT-ZEBRA-MIB"

  cd "redhat"
  sed -ri 's|/var/run/frr|/run/frr|g' "${pkgname}.logrotate"
  install -Dm0644 "${pkgname}.logrotate" "${pkgdir}/etc/logrotate.d/${pkgname}"

  for d in zebra ripd ripngd bgpd ospfd ospfd-instance@ ospf6d isisd pimd ldpd nhrpd; do
    install -Dm0644 ${d}.service "${pkgdir}/usr/lib/systemd/system/${d}.service"
  done

  install -Dm0644 "${srcdir}/${pkgname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
  install -Dm0644 "${srcdir}/${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
  rm -rfv "${pkgdir}/usr/bin/${pkgname}" "${pkgdir}/usr/bin/${pkgname}-reload.py"
  chown -R 177:177 "${pkgdir}/etc/frr"
}
