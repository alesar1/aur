# Maintainer: Kevin Baxmann <kvbx+aur@kvbx.de>
# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Andreas Pieber <anpieber@gmail.com>

set -u
pkgname=liquibase
pkgver=4.4.0
pkgrel=1
pkgdesc='VCS source control tailored for database management'
arch=('any')
url="http://www.liquibase.org/"
license=('Apache')
depends=('java-environment')
_giturl="https://github.com/liquibase/${pkgname}"
_verwatch=("${_giturl}/releases.atom" '\s\+<link rel="alternate" type="text/html" href="http.*/releases/tag/liquibase-parent-\([^"]\+\)"/>.*' 'f') # RSS
options=('!strip')
source=("https://github.com/liquibase/liquibase/releases/download/v${pkgver}/liquibase-${pkgver}.tar.gz"
        "liquibase.profile")
sha256sums=('8aa5900195751f7a7d51dfba5364702297c596cbbeed213de806e1deef02095b'
            '7c1939e5b1aee63db199c86989726bbdf81102784512ed69f8595fddf80c30c0')
package() {
  set -u
  # install profile file
  #install -Dpm644 "${srcdir}/liquibase.profile" "${pkgdir}/etc/profile.d/liquibase.sh"
  # sed makes it easy to not forget our underprivileged csh users
  #install -Dpm644 <(sed -e 's:export :setenv :g' -e 's:=: :g' "${srcdir}/liquibase.profile") "${pkgdir}/etc/profile.d/liquibase.csh"

  # This binary link removes the need for the profile files that require a logout to make work
  install -d "${pkgdir}/usr/bin"
  ln -s '/opt/liquibase/liquibase' -t "${pkgdir}/usr/bin/"

  # create folders
  install -d "${pkgdir}/opt/liquibase"

  # move liquibase tar content to /opt/liquibase
  find "${srcdir}/." -maxdepth 1 -not -type 'l' -not -name '*.' -exec mv '{}' "${pkgdir}/opt/liquibase/" ';'
  #cp -r ${srcdir}/* ${pkgdir}/opt/liquibase

  # make liquibase executable
  chmod 755 "${pkgdir}/opt/liquibase/liquibase"

  # remove files for other platforms
  rm -f "${pkgdir}/opt/liquibase"/{liquibase.bat,liquibase.spec}

  install -d "${pkgdir}/usr/share/licenses/${pkgbase}/"
  ln -s '/opt/liquibase/LICENSE.txt' -t "${pkgdir}/usr/share/licenses/${pkgbase}/"

  set +u
}
set +u
