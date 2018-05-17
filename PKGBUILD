# Maintainer: Sergey Shatunov <me#prok.pw>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Lukas Fleischer <lfleischer@archlinux.org>
# Contributor: Angel Velasquez <angvp@archlinux.org>
# Contributor: judd <jvinet@zeroflux.org>

_pkgname=exim
pkgbase=${_pkgname}-heavy
pkgname=(exim-heavy
         exim-lookup-mysql
         exim-lookup-passwd
         exim-lookup-pgsql)
pkgname=exim-heavy
pkgver=4.91
pkgrel=1
pkgdesc='Message Transfer Agent with maximal-enabled features'
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url='https://www.exim.org/'
license=('GPL')
makedepends=('gdbm' 'libldap' 'libnsl' 'openssl' 'pam' 'pcre' 'sqlite')
makedepends+=('libspf2' 'libidn' 'opendmarc' 'libsrs_alt' 'postgresql-libs' 'libmariadbclient')
source=("https://ftp.exim.org/pub/exim/exim4/exim-$pkgver.tar.bz2"{,.asc}
        aliases
        exim.logrotate
        exim.Makefile
        exim-submission@.service
        exim.service
        exim@.service
        exim.socket
        exim-submission.socket
        exim.sysusers
        exim.tmpfiles)
sha512sums=('dbdae7e451988d0f5085a700875372d4978c37baa51f1b106b55045eac39a9c92a90a5ebcbf7764dae4c9bb76e1dd52f48e84a3657f68cf96428281177c6d250'
            'SKIP'
            'a91c6a9e5b3ac9d143741dba01e11616812ba44c3a8c768c8232364026460f0b8fdeeb120a2f2b86742a6e3ebbfc9d6335b86d108b044e43108b4a6f0374c9ad'
            'd8e3b466e0bba8175cfe762058dec49018495a260aa5efd139f4ef435284c305958cbd7fc514e81042146368b749ae38f0bf276fc0b4b91918ef33126900aa81'
            '4086e401a21e80f92adadb0a637efcfb525a0c250e80e88f9b9a1f61cef463ecf89e769576331cd2b200ac1f4966efc5fa7fd44ac179cbf86a700faf5169e9bf'
            'dc28698f15e8eaa4614ae81fc8cb76d92fed1110ce02f7a6ee8feace418dbb194711eb2d4dd444cf818628c11721e21d80b7b974879ab6ddd78cc717cce17c2f'
            'e2fc3966c320460a26fbbf83e98df725587dc126dfe9d7a84c3285eb4b22a061b30499425c70f3d73cf13aa81c194274004efd20ce1316836463b982117909f8'
            '11c8133ee15b3e5193c9b1c59aed66c81b6e045dd23310bede9fcde6c88905db5ef08afdb798b53b75a7465915ea1247e980edf95db07a7f9b7bb58ce95fbb5a'
            'db621116907ceb573e6f34581f47c91f751bff593054d7ddc32397b34c7f2405bec184bdb0589d2ac457fa3a61bcba072761e3a6293a99c9c764d2d9fd6069ae'
            '4a233761793e3510e9efa5aad3a6098c41b757f13133a7ea825680f2b393aba8d7935f16bf1dd065dde884fe7ba45639a8d398333a7d9bf0a6b72f88c8f2a09d'
            '87a16aa7bd60a8df0da8131bb811825232f25e934b9326460a2f8f0f8e0f44c53d71b1225ecfee8d30c8714f6e9f85f5f0821e346a7751d43683b406376d605b'
            'f8a34fea0a65d0992732bc444bbb334d060de7d91d9cca6f00bc950ba289afa813783517dd3999437f89bc194290785805df7081606a65abb1db3fd3b3aa94ca')
validpgpkeys=('C693A034E1ED6EE954CAE2DA13DAD99C7E41519C'  # Phil Pennock <pdp@exim.org>
              'ACBB4324393ADE3515DA2DDA4D1E900E14C1CC04'  # Phil Pennock <phil.pennock@spodhuis.org>
              'E5CA331D44AB8E4C806FDBEE26101B62F69376CE'  # Heiko Schlittermann (Exim MTA Maintainer) <heiko@exim.org>
              'A986F3A6BD6377D8730958DEBCE58C8CE41F32DF') # Jeremy Harris <jgh@wizmail.org>
build() {
  cd $_pkgname-$pkgver

  cp ../$_pkgname.Makefile Local/Makefile
  make
}

package_exim-heavy() {
  depends=('gdbm' 'libldap' 'libnsl' 'openssl' 'pam' 'pcre' 'sqlite')
  optdepends=('exim-lookup-mysql: for MariaDB/MySQL lookup support'
              'exim-lookup-passwd: for passwd lookup support'
              'exim-lookup-pgsql: for PostgreSQL lookup support')
  provides=('smtp-server' 'smtp-forwarder')
  conflicts=('smtp-server' 'smtp-forwarder')
  backup=(etc/mail/aliases etc/mail/exim.conf etc/logrotate.d/exim)

  cd $_pkgname-$pkgver
  
  install -dm0755 "$pkgdir"/usr/lib/exim/lookups

  install -Dm0644 ../exim.logrotate "$pkgdir"/etc/logrotate.d/exim
  install -Dm0644 doc/exim.8 "$pkgdir"/usr/share/man/man8/exim.8

  install -Dm0644 ../exim.sysusers "$pkgdir"/usr/lib/sysusers.d/exim.conf
  install -Dm0644 ../exim.tmpfiles "$pkgdir"/usr/lib/tmpfiles.d/exim.conf

  cd build-Linux-*
  for i in exicyclog exim_checkaccess exim_dumpdb exim_lock exim_tidydb \
    exipick exiqsumm exigrep exim_dbmbuild exim exim_fixdb eximstats exinext \
    exiqgrep exiwhat; do
    install -Dm0755 "$i" "$pkgdir"/usr/bin/$i
  done
  chmod u+s "$pkgdir"/usr/bin/exim

  cd ../src
  sed -e "s|/etc/aliases|/etc/mail/aliases|g" \
    -e "s|SYSTEM_ALIASES_FILE|/etc/mail/aliases|g" \
    configure.default | install -Dm0644 /dev/stdin "$pkgdir"/etc/mail/exim.conf

  install -Dm0644 "$srcdir"/aliases "$pkgdir"/etc/mail/aliases

  cd "$pkgdir"/usr/bin
  for i in mailq newaliases rmail rsmtp runq sendmail; do
    ln -s exim "$i"
  done

  # fhs compliancy
  ln -s ../bin/exim ../lib/sendmail

  install -Dm0644 "$srcdir"/exim-submission@.service \
    "$pkgdir"/usr/lib/systemd/system/exim-submission@.service
  install -Dm0644 "$srcdir"/exim.service \
    "$pkgdir"/usr/lib/systemd/system/exim.service
  install -Dm0644 "$srcdir"/exim@.service \
    "$pkgdir"/usr/lib/systemd/system/exim@.service
  install -Dm0644 "$srcdir"/exim.socket \
    "$pkgdir"/usr/lib/systemd/system/exim.socket
  install -Dm0644 "$srcdir"/exim-submission.socket \
    "$pkgdir"/usr/lib/systemd/system/exim-submission.socket
}

package_exim-lookup-mysql() {
  depends=(${pkgbase} 'libmariadbclient')
  cd "${srcdir}/${_pkgname}-${pkgver}"
  cd build-Linux-*
  install -Dm0755 lookups/mysql.so "$pkgdir"/usr/lib/exim/lookups/mysql.so
}

package_exim-lookup-passwd() {
  depends=(${pkgbase})
  cd "${srcdir}/${_pkgname}-${pkgver}"
  cd build-Linux-*
  install -Dm0755 lookups/passwd.so "$pkgdir"/usr/lib/exim/lookups/passwd.so
}

package_exim-lookup-pgsql() {
  depends=(${pkgbase} 'postgresql-libs')
  replaces=('exim-pgsql')
  cd "${srcdir}/${_pkgname}-${pkgver}"
  cd build-Linux-*
  install -Dm0755 lookups/pgsql.so "$pkgdir"/usr/lib/exim/lookups/pgsql.so
}
