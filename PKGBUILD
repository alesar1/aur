#Maintainer: Raimar Buehmann <raimar at buehmann dot de>

pkgname='eclipse-jubula-git'
pkgver=4.0.0
pkgrel=2
pkgdesc='Jubula plugins for Eclipse IDE to create functional GUI tests (gerrit version)'
arch=('any')
url='http://eclipse.org/jubula/'
license=('EPL')
depends=('eclipse>=4.3.0', 'eclipse-mylyn')
provides=('eclipse-jubula')
conflicts=('eclipse-jubula')
options=('!strip')
_buildNumber=381
source=(
"https://hudson.eclipse.org/jubula/job/jubula-gerrit/${_buildNumber}/artifact/org.eclipse.jubula.core/org.eclipse.jubula.repo/target/org.eclipse.jubula.repo-${pkgver}-SNAPSHOT.zip")
sha256sums=('34520dcf3f438c9a51dbdda9da37fd751c98292e5ba39fbe22dd88265b1eaba3')

package() {
  # remove features and plug-ins contain sources
  rm features/*.source_*
  rm plugins/*.source_*
  # remove gz files
  rm plugins/*.pack.gz
  _dest=${pkgdir}/usr/lib/eclipse/dropins/${pkgname/eclipse-}/eclipse
  install -d $_dest
  # extract features (otherwise features are not recognized)
  find features -type f | while read _feature ; do
    if [[ ${_feature} =~ (.*\.jar$) ]] ; then
      install -dm755 ${_dest}/${_feature%*.jar}
      cd ${_dest}/${_feature/.jar}
      jar xf ${srcdir}/${_feature} || return 1
    else
      install -Dm644 ${_feature} ${_dest}/${_feature}
    fi
  done
  # copy plugins
  find plugins -type f | while read _plugin ; do
    install -Dm644 ${_plugin} ${_dest}/${_plugin}
  done
}
