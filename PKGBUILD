# Maintainer: Nathaniel Chin <thegamingorangutans+aur at gmail.com>

_name=Av1an
pkgname=python-av1an
pkgver=6.1.post2
pkgrel=1
pkgdesc='A cross-platform all-in-one tool for streamlining AV1 encoding'
arch=('any')
url='https://github.com/master-of-zen/Av1an'
license=('GPL3')
makedepends=('python-setuptools')
depends=('python>=3.6.0' 'python-numpy' 'python-scenedetect' 'opencv'
         'python-tqdm' 'python-psutil' 'python-scipy' 'python-matplotlib'
         'ffmpeg' 'aom' 'hdf5')
optdepends=('svt-av1: SVT-AV1 encoder support'
            'rav1e: rav1e encoder support'
            'libvpx: vpx encoder support'
            'svt-vp9: SVT-VP9 encoder support'
            'vmaf: VMAF calculation support'
            'x265: x265 encoder support'
            'x264: x264 encoder support'
            'vapoursynth: Vapoursynth support'
            'mkvtoolnix-cli: mkvmerge support'
            'ffms2'
            'vapoursynth-plugin-lsmashsource'
            )
source=("av1an-${pkgver}.tar.gz"::"https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('2b84b0450286ba941183ab5902c6527ebd767ff2a5563dd8c37bc189619249a7')


package() {
    cd $srcdir/Av1an-${pkgver}
    python setup.py install --root="${pkgdir}" --optimize=1
}
