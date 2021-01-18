# Maintainer: Metal A-wing <1 at 233 dot email>

pkgname=iredis
pkgver=1.9.1
pkgrel=3
pkgdesc='Interactive Redis: A Cli for Redis with AutoCompletion and Syntax Highlighting'
arch=('any')
url="https://github.com/laixintao/iredis"
license=('BSD')
depends=(
	'python'
	'python-redis'
	'python-prompt_toolkit'
	'python-pygments'
	'python-mistune'
	'python-configobj'
	'python-click'
	'python-pendulum'
	'python-importlib_resources'
	'python-wcwidth'
)

makedepends=('python-setuptools')
#checkdepends=('python-pytest' 'python-pexpect' 'redis')
source=('https://files.pythonhosted.org/packages/5c/94/7ab450e78a1c2947a65e4eca9ea3a1ac444f518be3b1633fe54a2a3aa2a5/iredis-1.9.1.tar.gz')
sha512sums=('9bc605c9f3ad43a04622c70cf9829580eaa621c41a93eea8c045eea44c318dc42e00ad659dcec11d74e431d4b3d3c40e66a0731c2defeb84b1ff74cc5a97c8fa')

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  python setup.py build
}

check() {
  cd ${srcdir}/${pkgname}-${pkgver}

	# Let me think about it !
	#pytest
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  python setup.py install --root=${pkgdir} --optimize=1
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

