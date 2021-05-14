# Maintainer: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Maintainer: Guillaume ALAUX <guillaume@archlinux.org>
# Contributor: Andrew Wright <andreww@photism.org>
# Contributor: Paul Mattal <paul@archlinux.org>

pkgbase=ant19
_pkgbase=ant
pkgname=('ant19' 'ant19-doc')
pkgver=1.9.15
pkgrel=2
pkgdesc='Java based build tool'
url='https://ant.apache.org/'
arch=('any')
license=('APACHE')
makedepends=('bash' 'bin32-jdk6' 'junit' 'java-hamcrest')
source=(https://www.apache.org/dist/ant/source/apache-${_pkgbase}-${pkgver}-src.tar.bz2{,.asc}
        ant.conf
        apache-ant-1.9.15-https-and-repo-urls.patch
        NetRexx.zip::ftp://ftp.software.ibm.com/software/awdtools/netrexx/NetRexx.zip)

sha256sums=('7f7251009dc53e60afac47d0df6bd7e7d3cdba9fa7fec67b7a95412e8becdc8b'
            'SKIP'
            '23bbef577b56d48adb1985dbd9795e5533146646f1e8bb879dd061a4014ffcf2'
            'fc8ed0be9586293a8a7f6cf8d245d1db56c43598b6a155ee27f7a4eeb59cafec'
            '1f99f054e9b1e412d29823088f3fa7cfce90a7af25d907a60a6d7908a6b97ea4')
validpgpkeys=(
  'CE8075A251547BEE249BC151A2115AE15F6B8B72' # Stefan Bodewig
  '8DA70C00DF7AF1B0D2F9DC74DDBCC1270A29D081' # jaikiran@apache <jaikiran@apache.org>
)

_replace_lib() {
  # explicitly call rm to ensure we replace instead of add
  rm "$2"
  ln -s "$1" "$2"
}

prepare() {
  cd apache-${_pkgbase}-${pkgver}
  patch -Np1 < $srcdir/apache-ant-1.9.15-https-and-repo-urls.patch
  mkdir -p ~/.ant/tempcache
  cp $srcdir/NetRexx.zip ~/.ant/tempcache/.
  sed -i 's|/usr/bin/python|/usr/bin/python2|' src/script/runant.py
}

build() {
  cd apache-${_pkgbase}-${pkgver}
  export JAVA_HOME=/usr/lib32/jvm/java-6-jdk
  ./bootstrap.sh
  bootstrap/bin/ant -Ddest=optional -f fetch.xml
  _replace_lib /usr/share/java/junit.jar lib/optional/junit-4.12.jar
  _replace_lib /usr/share/java/hamcrest-core.jar lib/optional/hamcrest-core-1.3.jar
  _replace_lib /usr/share/java/hamcrest-library.jar lib/optional/hamcrest-library-1.3.jar
  bootstrap/bin/ant dist
}

package_ant19() {
  depends=('bin32-jdk6' 'bash')
  optdepends=('junit: junit tasks'
              'java-hamcrest: junit tasks')
  conflicts=('ant')
  backup=('etc/ant.conf')

  cd apache-${_pkgbase}-${pkgver}/apache-${_pkgbase}-${pkgver}
  local _ant_home=/usr/share/ant

  install -d "${pkgdir}${_ant_home}"
  cp -Rp etc "${pkgdir}${_ant_home}"

  find bin -type f -a ! -name \*.bat -a ! -name \*.cmd \
    -exec install -Dm 755 {} -t "${pkgdir}${_ant_home}/bin" \;
  install -d "${pkgdir}/usr/bin"
  ln -s /usr/share/ant/bin/ant "${pkgdir}/usr/bin/ant"

  install -Dm 644 "${srcdir}/ant.conf" -t "${pkgdir}/etc"
  install -Dm 644 lib/*.jar -t "${pkgdir}/usr/share/java/ant"
  ln -s /usr/share/java/ant "${pkgdir}${_ant_home}/lib"

  install -Dm 644 ../{LICENSE,NOTICE} -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_ant19-doc() {
  pkgdesc='Apache Ant build tool documentation'
  conflicts=('ant-doc')

  install -d "${pkgdir}/usr/share/doc/ant"
  cp -r apache-${_pkgbase}-${pkgver}/apache-${_pkgbase}-${pkgver}/manual/* \
    "${pkgdir}/usr/share/doc/ant"
}

# vim: ts=2 sw=2 et:
