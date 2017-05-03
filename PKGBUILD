# Maintainer: mdraw.gh@gmail.com

pkgname=('python-elektronn2-git' 'python2-elektronn2-git')
_gitname='ELEKTRONN2'
pkgver=rev59
pkgrel=1
pkgdesc='A highly configurable toolkit for training 3D/2D CNNs and general Neural Networks'
url='https://github.com/ELEKTRONN/ELEKTRONN2'
license=('GPLv3')
arch=('any')
source=("git://github.com/ELEKTRONN/${_gitname}.git")
md5sums=('SKIP')

pkgver() {
    cd "$_gitname"
    echo "rev$(git rev-list --all --count)"
    #git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package_python-elektronn2-git() {
    depends=(
        'python'
        'python-theano'
        'python-matplotlib'
        'python-h5py'
        'python-numpy'
        'python-scipy'
        'python-numba'
        'python-future'
        'python-tqdm'
        'python-colorlog'
        'python-prompt_toolkit'
        'python-jedi'
        'python-scikit-learn'
        'python-scikit-image'
        'python-seaborn'
        'python-pydotplus'
        'python-psutil'
    )
    makedepends=('python-setuptools' 'python-numpy')
    conflicts=('python-elektronn2')

    cd "${srcdir}/${_gitname}"
    python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-elektronn2-git() {
    depends=(
        'python2'
        'python2-theano'
        'python2-matplotlib'
        'python2-h5py'
        'python2-numpy'
        'python2-scipy'
        'python2-numba'
        'python2-future'
        'python2-tqdm'
        'python2-colorlog'
        'python2-prompt_toolkit'
        'python2-jedi'
        'python2-scikit-learn'
        'python2-scikit-image'
        'python2-seaborn'
        'python2-pydotplus'
        'python2-psutil'
    )
    makedepends=('python2-setuptools' 'python2-numpy')
    conflicts=('python2-elektronn2')

    cd "${srcdir}/${_gitname}"
    python2 setup.py install --root="${pkgdir}" --optimize=1
    mv "${pkgdir}/usr/bin/elektronn2-train" "${pkgdir}/usr/bin/elektronn2-train2"
}
