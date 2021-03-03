# Maintainer: Antoine Viallon <antoine+aur@lesviallon.fr>
# Contributor: XavierCLL <xavier.corredor.llano (a) gmail.com>

pkgbase=pycharm-professional-edition
pkgname=(pycharm-professional-edition pycharm-professional-edition-jre)
_pkgname=pycharm-professional
pkgver=2020.3.3
_buildver=2020.3.3
pkgrel=1
arch=('any')
pkgdesc="Python IDE for Professional Developers. Professional Edition"
url='https://www.jetbrains.com/pycharm/'
provides=('pycharm')
license=('custom')
options=(!strip)
source=("https://download.jetbrains.com/python/${_pkgname}-$pkgver.tar.gz"
        "pycharm-professional.desktop"
        "charm.desktop")
sha256sums=('b526c73554a297b509565f0c218bce64f4f63072766d2ca9d4fb1a7efb0dfbfb'
            'a75264959b06a45ea0801729bc1688bfbd52da3c5fbf3d5b1ad9267860439291'
            'c2b35cb217ca2ce31ccb7afe13fd7234ea65ac24c611c24e3e668a7f9b5f02fb')
makedepends=('python-setuptools' 'cython')
        
pycharm_folder="pycharm-$pkgver"
prepare() {
  # Extract the JRE from the main pacakge
  rm -rf "$srcdir"/jbr
  mv "${pycharm_folder}"/jbr "$srcdir"/jbr
}

build() {
    # compile PyDev debugger used by PyCharm to speedup debugging
    find "$pycharm_folder"/plugins/python/helpers/pydev/ \( -name *.c -o -name *.so -o -name *.pyd \) -delete
    sed -i '1s/^/# cython: language_level=3\n/' "$pycharm_folder"/plugins/python/helpers/pydev/_pydevd_bundle/pydevd_cython.pxd
    python "$pycharm_folder"/plugins/python/helpers/pydev/setup_cython.py build_ext --inplace --force-cython
    rm -rf "$pycharm_folder"/plugins/python/helpers/pydev/build/
    find "$pycharm_folder"/plugins/python/helpers/pydev/ -name __pycache__ -exec rm -rf {} \;
    
    rm -r "$pycharm_folder"/lib/pty4j-native/linux/{mips64el,ppc64le,aarch64}
}

package_pycharm-professional-edition() {
  backup=("opt/$pkgname/bin/pycharm.vmoptions" "opt/${pkgname}/bin/pycharm64.vmoptions" "opt/${pkgname}/bin/idea.properties")
  depends=('giflib' 'libxtst' 'python' 'libxslt' 'libxss' 'nss')
  optdepends=(
    'pycharm-professional-edition-jre: JetBrains custom JRE (Recommended)' 'java-environment: Required if intellij-idea-ultimate-edition-jre is not installed'
    'libdbusmenu-glib: For global menu support'
  )
  optdepends+=(
    'python2: Python 2 support'
    'ipython2: For enhanced interactive Python shell v2 inside Pycharm'
    'ipython: For enhanced interactive Python shell v3 inside Pycharm'
    'openssh: For deployment and remote connections'
    'python2-setuptools: Packages manager for Python 2, for project interpreter'
    'python-setuptools: Packages manager for Python 3, for project interpreter'
    'python2-coverage: For support code coverage measurement for Python 2'
    'python-coverage: For support code coverage measurement for Python 3'
    'cython2: For performance debugger in Python 2'
    'cython: For performance debugger in Python 3'
    'docker-machine: For support docker inside Pycharm'
    'docker-compose: For support docker inside Pycharm'
    'vagrant: For support virtualized development environments'
    'python2-pytest: For support testing inside Pycharm with Python 2'
    'python-pytest: For support testing inside Pycharm with Python 3'
    'python2-tox: Python environments for testing tool with Python 2'
    'python-tox: Python environments for testing tool with Python 3'
    'jupyter: For support Jupyter Notebook'
  )
  
  cd "$srcdir"
  
  install -d "$pkgdir"/{opt/$pkgname,usr/bin}
  mv "${pycharm_folder}"/* "$pkgdir"/opt/$pkgbase
  
  # https://youtrack.jetbrains.com/issue/IDEA-185828
  # chmod +x "$pkgdir"/opt/$pkgbase/plugins/maven/lib/maven3/bin/mvn
  
  ln -s /opt/$pkgname/bin/pycharm.sh "$pkgdir"/usr/bin/$pkgname
  install -D -m644 "$srcdir"/charm.desktop "$pkgdir"/usr/share/applications/charm.desktop
  install -D -m644 "$pkgdir"/opt/$pkgbase/bin/pycharm.png "$pkgdir"/usr/share/pixmaps/"$pkgname".png
  
  install -d -m755 "$pkgdir"/usr/share/icons/hicolor/{128x128,scalable}/apps/
  
  install -D -m644 "$pkgdir"/opt/$pkgname/bin/pycharm.svg "$pkgdir"/usr/share/icons/hicolor/scalable/apps/"$pkgname".svg

  # workaround FS#40934
  sed -i 's|lcd|on|'  "$pkgdir"/opt/$pkgname/bin/*.vmoptions
}

package_pycharm-professional-edition-jre() {
  arch=('x86_64')
  install -d -m 755 "$pkgdir"/opt/$pkgbase
  mv "$srcdir"/jbr "$pkgdir"/opt/$pkgbase
}

# vim:set ts=2 sw=2 et:
