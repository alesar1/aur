# Maintainer: Kevin Andriessens <kevin@kelaun.be>
# Contributor: layday <layday@protonmail.com>
pkgname='instawow'
pkgver='1.14.2'
pkgrel=2
pkgdesc="Package manager for World of Warcraft"
arch=('x86_64')
url="https://github.com/layday/instawow"
license=('GPL3')
depends=('python>=3.7.0' 'python-aiohttp>=3.5.0' 'python-alembic>=1.4.0' 'python-click>=7.1.0' 'python-jellyfish>=0.8.2' 'python-jinja>=2.0.0' 'python-loguru<1.0.0' 'python-prompt_toolkit>3.0.2' 'python-prompt_toolkit<4.0.0' 'python-pydantic>=1.6.1' 'python-questionary>1.3.0' 'python-sqlalchemy>=1.3.19' 'python-typing_extensions>=3.7.0' 'python-yarl>=1.4.0' 'python-slpp-git')
makedepends=('tar' 'python-setuptools' 'python-setuptools-scm' 'python-toml')
optdepends=('python-aiohttp_rpc: server support')
checkdepends=('python-pytest>=6.0.1' 'python-pytest-asyncio' 'python-aresponses')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('f0ec1c78487f29947f16fe99bc2157f4cdf87bab6223df4ee0582c233f6b21e4')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

check() {
	cd "$pkgname-$pkgver"
	PYTHONPATH="$PWD/build/lib" pytest --ignore tests/test_json_rpc_api.py --ignore tests/test_cli_output.py
}

package() {
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
