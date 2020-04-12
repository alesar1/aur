
# Maintainer: DJ Lucas <dj@lucasit.com>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: judd <jvinet@zeroflux.org>
# Contributor: Michael Hansen <zrax0111 gmail com>
# Contributor: Marco A Rojas <marquicus at gmail.com>
# Contributor: Netanel Shine <netanel at archlinux.org.il >
# Contributor: ngoonee <ngoonee.talk@gmail.com>
# Contributor: Adam Russell <adamlr6+arch@gmail.com>
# Contributor: Dhananjay Sathe <dhananjaysathe@gmail.com>

pkgbase=samba-heimdal
pkgbaseorig=samba
pkgname=('libwbclient-heimdal' 'smbclient-heimdal' 'samba-heimdal')
pkgver=4.11.6
pkgrel=1
arch=(x86_64)
url="https://www.samba.org"
license=('GPL3')
makedepends=('python' 'docbook-xsl' 'pkg-config' 'libbsd' 'db' 'popt' 'libcups'
             'readline' 'tevent' 'acl' 'libldap' 'libcap' 'ldb-heimdal' 'krb5' 'pam'
             'systemd' 'gnutls' 'talloc' 'tdb' 'dbus' 'libaio'
             'perl-parse-yapp' 'libnsl' 'libtirpc' 'rpcsvc-proto' 'jansson')
source=(https://us1.samba.org/samba/ftp/stable/${pkgbaseorig}-${pkgver}.tar.gz
        samba.logrotate
        samba.pam
        samba.conf)
sha512sums=('3815080a1693c596a126371a5ea4e8534317a7266803c7de13a7e5b3ee9757dfbf13c0de20d498a6683d3aaf56941ed42f289e3c24f88713529a5f047a691af2'
            '2ba0691ded467e4d6e40821f6de58c00f8962209efe2e60284c0c87756ab471c22c3d63b77d506e48c90ed0d852a2a24e41be1d499cf74a73cb99da0b503c858'
            '1e6183ab0eb812b3ef687ac2c26ce78f7cb30540f606d20023669ac00ba04075487fb72e4dc89cc05dab0269ff6aca98fc1167cc75669c225b88b592482fbf67'
            'e46ee848baabb261e7468ecee43aba4d001a24f86f5322ae522abdb75030fd0ebd9063b9df0be3576c4d1654d81331f5e389aee16ec2fa138259ae4728e94efc')
### UNINSTALL dmapi package before building!!!

build() {
  # Use samba-pkg as a staging directory for the split packages
  # (This is so RPATHS and symlinks are generated correctly via
  # make install, but the otherwise unsplit pieces can be split)
  _pkgsrc="${srcdir}"/samba-pkg
  rm -rf ${_pkgsrc}
  _samba4_idmap_modules=idmap_ad,idmap_rid,idmap_adex,idmap_hash,idmap_tdb2
  _samba4_pdb_modules=pdb_tdbsam,pdb_ldap,pdb_ads,pdb_smbpasswd,pdb_wbc_sam,pdb_samba4
  _samba4_auth_modules=auth_unix,auth_wbc,auth_server,auth_netlogond,auth_script,auth_samba4
  cd samba-${pkgver}
  ./configure --enable-fhs \
              --prefix=/usr \
              --sysconfdir=/etc \
              --sbindir=/usr/bin \
              --libdir=/usr/lib \
              --libexecdir=/usr/lib/samba \
              --localstatedir=/var \
              --with-configdir=/etc/samba \
              --with-lockdir=/var/cache/samba \
              --with-sockets-dir=/run/samba \
              --with-piddir=/run \
              --with-ads \
              --with-ldap \
              --with-winbind \
              --with-acl-support \
              --with-systemd \
              --systemd-install-services \
              --with-pam \
              --with-pammodulesdir=/usr/lib/security \
              --bundled-libraries=!tdb,!talloc,!pytalloc-util,!tevent,!popt,!ldb,!pyldb-util \
              --with-shared-modules=${_samba4_idmap_modules},${_samba4_pdb_modules},${_samba4_auth_modules} \
              --disable-rpath-install

              # Add this to the options once it's working...
               #--with-system-mitkrb5 /opt/heimdal
  make
  make DESTDIR="${_pkgsrc}/" install

  # This gets skipped somehow
  if [ ! -e "${_pkgsrc}"/usr/bin/smbtar ]; then
      install -m755 "${srcdir}"/samba-${pkgver}/source3/script/smbtar "${_pkgsrc}"/usr/bin/
  fi
}

package_libwbclient-heimdal() {
  pkgdesc="Samba winbind client library (built for Samba with Heimdal)"
  depends=('glibc' 'libbsd' 'libtevent.so')
  provides=('libwbclient')
  conflicts=('libwbclient')
  # Use samba-pkg as a staging directory for the split packages
  # (This is so RPATHS and symlinks are generated correctly via
  # make install, but the otherwise unsplit pieces can be split)
  _pkgsrc="${srcdir}"/samba-pkg
  install -d -m755 "${pkgdir}"/usr/lib
  mv "${_pkgsrc}"/usr/lib/libwbclient*.so* "${pkgdir}"/usr/lib/

  install -d -m755 "${pkgdir}"/usr/lib/samba
  mv "${_pkgsrc}"/usr/lib/samba/libwinbind-client*.so* "${pkgdir}"/usr/lib/samba/
  mv "${_pkgsrc}"/usr/lib/samba/libreplace-samba4.so* "${pkgdir}"/usr/lib/samba/

  install -d -m755 "${pkgdir}"/usr/lib/pkgconfig
  mv "${_pkgsrc}"/usr/lib/pkgconfig/wbclient.pc "${pkgdir}"/usr/lib/pkgconfig/

  install -d -m755 "${pkgdir}"/usr/include/samba-4.0
  mv "${_pkgsrc}"/usr/include/samba-4.0/wbclient.h "${pkgdir}"/usr/include/samba-4.0/
}

package_smbclient-heimdal() {
pkgdesc="Tools to access a server's filespace and printers via SMB (built for Samba with Heimdal)"
depends=('popt' 'cifs-utils' 'tdb' "libwbclient-heimdal>=$pkgver" 'ldb-heimdal'
         'tevent' 'libgcrypt' 'python' 'talloc' 'readline' 'gnutls'
         'libbsd' 'libldap' 'libcups' 'libarchive' 'libnsl' 'jansson'
         'libldb.so' 'libtdb.so' 'libtevent.so' 'libreadline.so')
provides=('smbclient')
conflicts=('smbclient')

    _smbclient_bins=('smbclient' 'rpcclient' 'smbspool'
                     'smbtree' 'smbcacls' 'smbcquotas' 'smbget' 'net'
                     'nmblookup' 'smbtar')
    # Use samba-pkg as a staging directory for the split packages
    # (This is so RPATHS and symlinks are generated correctly via
    # make install, but the otherwise unsplit pieces can be split)
    _pkgsrc="${srcdir}"/samba-pkg
    install -d -m755 "${pkgdir}"/usr/bin
    for bin in ${_smbclient_bins[@]}; do
        mv "${_pkgsrc}"/usr/bin/${bin} "${pkgdir}"/usr/bin/
    done

    # smbclient binaries link to the majority of the samba
    # libs, so this is a shortcut instead of resolving the
    # whole dependency tree by hand
    install -d -m755 "${pkgdir}"/usr/lib
    for lib in "${_pkgsrc}"/usr/lib/lib*.so*; do
        mv ${lib} "${pkgdir}"/usr/lib/
    done

    install -d -m755 "${pkgdir}"/usr/lib/samba
    for lib in "${_pkgsrc}"/usr/lib/samba/lib*.so*; do
        mv ${lib} "${pkgdir}"/usr/lib/samba/
    done

    install -d -m755 "${pkgdir}"/usr/lib/pkgconfig
    mv "${_pkgsrc}"/usr/lib/pkgconfig/smbclient.pc "${pkgdir}"/usr/lib/pkgconfig/
    mv "${_pkgsrc}"/usr/lib/pkgconfig/netapi.pc "${pkgdir}"/usr/lib/pkgconfig/

    install -d -m755 "${pkgdir}"/usr/share/man/man1
    install -d -m755 "${pkgdir}"/usr/share/man/man7
    install -d -m755 "${pkgdir}"/usr/share/man/man8
    for bin in ${_smbclient_bins[@]}; do
        if [ -e "${_pkgsrc}"/usr/share/man/man1/${bin}.1 ]; then
            mv "${_pkgsrc}"/usr/share/man/man1/${bin}.1 "${pkgdir}"/usr/share/man/man1/
        fi
        if [ -e "${_pkgsrc}"/usr/share/man/man8/${bin}.8 ]; then
            mv "${_pkgsrc}"/usr/share/man/man8/${bin}.8 "${pkgdir}"/usr/share/man/man8/
        fi
    done
    mv "${_pkgsrc}"/usr/share/man/man7/libsmbclient.7 "${pkgdir}"/usr/share/man/man7/

    install -d -m755 "${pkgdir}"/usr/include/samba-4.0
    mv "${_pkgsrc}"/usr/include/samba-4.0/libsmbclient.h "${pkgdir}"/usr/include/samba-4.0/
    mv "${_pkgsrc}"/usr/include/samba-4.0/netapi.h "${pkgdir}"/usr/include/samba-4.0/

    mkdir -p "${pkgdir}"/usr/lib/cups/backend
    ln -sf /usr/bin/smbspool "${pkgdir}"/usr/lib/cups/backend/smb
}

package_samba-heimdal() {
pkgdesc="SMB Fileserver and AD Domain server (using internal Heimdal server)"
depends=('db>=4.7' 'popt' 'libcups' 'libcap>=2.16' 'gnutls>=2.4.1'
         'talloc' 'ldb-heimdal' 'libbsd' 'python' 'iniparser' 'tdb' 'libaio' 'perl-parse-yapp' "smbclient-heimdal>=$pkgver" 'gpgme'
         'libldb.so' 'libtdb.so' 'libtevent.so')
provides=('samba')
conflicts=('samba')
backup=(etc/logrotate.d/samba
        etc/pam.d/samba
        etc/conf.d/samba)
install=samba.install
    # Use samba-pkg as a staging directory for the split packages
    # (This is so RPATHS and symlinks are generated correctly via
    # make install, but the otherwise unsplit pieces can be split)
    _pkgsrc="${srcdir}"/samba-pkg
    # Everything that libwbclient and smbclient didn't install goes
    # into the samba package...
    mv "${_pkgsrc}"/* "${pkgdir}"
    rmdir "${_pkgsrc}"

    # Make admin scripts look in the right place for the samba python module
    for script in bin/samba_dnsupdate bin/samba_kcc bin/samba_spnupdate \
                  bin/samba_upgradedns bin/samba-tool
    do
        sed -i "/^sys\.path\.insert/ a\
sys.path.insert(0, '/usr/lib/python${_pyver}/site-packages')" \
               "${pkgdir}"/usr/${script}
    done

  # packaging/wscript_build to use /etc/conf.d
  sed -i -e '/^EnvironmentFile/ s/sysconfig/conf.d/' "${pkgdir}"/usr/lib/systemd/system/*.service
  install -d -m755  "${pkgdir}"/etc/conf.d
  install -m644 "${srcdir}"/samba-${pkgver}/packaging/systemd/samba.sysconfig "${pkgdir}"/etc/conf.d/samba

  # create ephemeral dirs via tmpfiles rather than shipping them in package
  install -D -m644 "${srcdir}"/samba.conf "${pkgdir}"/usr/lib/tmpfiles.d/samba.conf
  # create config dir
  install -d -m755 "${pkgdir}"/etc/samba

  mkdir -p "${pkgdir}"/etc/samba/private
  chmod 700 "${pkgdir}"/etc/samba/private

  install -D -m644 "${srcdir}"/samba.logrotate "${pkgdir}"/etc/logrotate.d/samba
  install -D -m644 "${srcdir}"/samba.pam "${pkgdir}"/etc/pam.d/samba 
  
  # spool directory
  install -d -m1777 "${pkgdir}"/var/spool/samba
  
  rm -rf "${pkgdir}"/var/run
  rm -rf "${pkgdir}"/etc/sysconfig
  
  # copy ldap example
  install -D -m644 "${srcdir}"/samba-${pkgver}/examples/LDAP/samba.schema "${pkgdir}"/usr/share/doc/samba/examples/LDAP/samba.schema
}

# vim: ts=2 sw=2 et:
