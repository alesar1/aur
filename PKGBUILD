# Maintainer: Philipp A. <flying-sheep@web.de>

pkgname=scanpy
pkgver=1.6.0
pkgrel=1
pkgdesc='Single-Cell Analysis in Python'
arch=(any)
provides=(scanpy python-scanpy)
url='https://github.com/theislab/scanpy'
license=(BSD)
depends=(
	'python-anndata>=0.6.22'
	'python-matplotlib>=3.0'
	'python-pandas>=0.21'
	'python-scipy>=1.4'
	python-seaborn
	python-h5py
	python-pytables
	python-tqdm
	python-importlib-metadata
	'python-scikit-learn>=0.21.2'
	'python-statsmodels>=0.10.0'
	python-patsy
	'python-networkx>=2.3'
	python-natsort
	python-joblib
	'python-numba>=0.41.0'
	'python-umap-learn>=0.3.0'
	python-legacy-api-wrap
	python-setuptools_scm
	python-packaging
	python-sinfo
)
optdepends=(
	'python-bbknn: Batch balanced KNN (batch correction)'
	'python-leidenalg: leiden community detection'
	'python-multicoretsne: Fast t-SNE'
	'python-louvain-igraph: Louvain clustering'
)
makedepends=(install-wheel-scripts)
_wheel="$pkgname-$pkgver-py3-none-any.whl"
source=("https://files.pythonhosted.org/packages/py3/${pkgname::1}/$pkgname/$_wheel")
sha256sums=('d17b9052440392d5a4f7d1b5aa1b131f46c470953ded348375a4ee2f0519a55a')
noextract=("$_wheel")

package() {
	local site="$pkgdir/usr/lib/$(readlink /bin/python3)/site-packages"
	install -d "$site"
	unzip "$_wheel" -d "$site"
	install-wheel-scripts --prefix="$pkgdir/usr" "$_wheel"
}
