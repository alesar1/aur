# Maintainer: Giorgio Gilestro <giorgio at gilest.ro>

pkgname=ethoscope-node
pkgver=0.0.0
pkgrel=1
pkgdesc="A platform for monitoring animal behaviour in real time from a raspberry pi"
arch=('any')
url="http://lab.gilest.ro/ethoscope"
license=('GPL3')
makedepends=('git' 'gcc-fortran' 'rsync' 'wget' 'fping' ) 
depends=('ntp' 'openssh' 'mariadb' 'dnsmasq' 'avahi' 'python-setuptools' 'python-pip' 'python-ifaddr' 'python-numpy' 'python-bottle' 'python-pyserial' 'python-mysql-connector' 'python-netifaces' 'python-cherrypy' 'python-eventlet' 'python-gitpython'  'python-dnspython' 'python-greenlet' 'python-monotonic' 'python-zeroconf' 'python-cheroot')
provides=('ethoscope')
install="ethoscope-node.install"
source=("$pkgname::git://github.com/gilestrolab/ethoscope.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  # Use the tag of the last commit
  git describe --long | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

package() {
  #creating packaging directories
  install -dm0755 $pkgdir/opt
  install -dm0755 $pkgdir/srv/git
  install -dm0755 $pkgdir/usr/lib/systemd/system
  install -dm0755 $pkgdir/ethoscope_data/{results,videos,tmp}
  
  #create bare repo
  git clone --bare https://github.com/gilestrolab/ethoscope.git "${pkgdir}/srv/git/ethoscope.git"
  
  #setting python3 branch
  cd "${srcdir}/${pkgname}"
  git checkout python3.7

  #cp node server and node updater
  cd "${srcdir}"
  cp -R --no-dereference --preserve=mode,links -v * "${pkgdir}/opt/${pkgname}"
  ln -s /opt/ethoscope-node/scripts/ethoscope_updater "${pkgdir}/opt/"
  
  #install python service
  #cd "${srcdir}/${pkgname}/node_src"
  #pip install -e . --install-option="--prefix=${pkgdir}" --no-deps
  #python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  #install service files
  cd "${srcdir}"/"${pkgname}"/scripts/
  install -D --mode=0755 ethoscope_node.service ethoscope_backup.service ethoscope_video_backup.service "${pkgdir}/usr/lib/systemd/system/"
  cd "${srcdir}"/"${pkgname}"/scripts/ethoscope_updater/
  install -D --mode=0755 ethoscope_update_node.service "${pkgdir}/usr/lib/systemd/system/"

}


