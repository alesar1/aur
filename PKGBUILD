# Maintainer: Sanpi <sanpi+aur@homecomputing.fr>
pkgname=rpcs3
pkgver=0.0.7
pkgrel=1
pkgdesc='Open-source Sony PlayStation 3 Emulator'
arch=('x86_64')
url='https://rpcs3.net/'
license=('GPL2')
depends=('ffmpeg' 'glew' 'openal' 'qt5-base' 'vulkan-icd-loader')
makedepends=('cmake' 'boost')
options=('!strip')
source=("https://github.com/RPCS3/$pkgname/archive/v$pkgver.tar.gz"
    'GSL.tar.gz::https://github.com/Microsoft/GSL/archive/1995e86d1ad70519465374fb4876c6ef7c9f8c61.tar.gz'
    'cereal.tar.gz::https://github.com/USCiLab/cereal/archive/42a45b6e15fcbd1a3d65b033f5d4d0b2ef6c023d.tar.gz'
    'ffmpeg.tar.gz::https://github.com/hrydgard/ppsspp-ffmpeg/archive/7b7ae7b06705bf5539b222e77c779d4b649b53ef.tar.gz'
    'hidapi.tar.gz::https://github.com/RPCS3/hidapi/archive/9220f5e77c27b8b3717b277ec8d3121deeb50242.tar.gz'
    'libpng.tar.gz::https://github.com/RPCS3/libpng/archive/eddf9023206dc40974c26f589ee2ad63a4227a1e.tar.gz'
    'libusb.tar.gz::https://github.com/RPCS3/libusb/archive/7cfa00e9d723f10167b4d71bceebf2b4b2cbd70e.tar.gz'
    'pugixml.tar.gz::https://github.com/RPCS3/pugixml/archive/8bf806c035373bd0723a85c0820cfd5c804bf6cd.tar.gz'
    'xxhash.tar.gz::https://github.com/Cyan4973/xxHash/archive/7cc9639699f64b750c0b82333dced9ea77e8436e.tar.gz'
    'yaml-cpp.tar.gz::https://github.com/jbeder/yaml-cpp/archive/eca9cfd64899525d0a61abb0553849676a0fe511.tar.gz'
    'zlib.tar.gz::https://github.com/madler/zlib/archive/cacf7f1d4e3d44d871b605da3b647f07d718623f.tar.gz'
    'glslang.tar.gz::https://github.com/KhronosGroup/glslang/archive/c11e3156af2297f89a23c8db3f5e2323733ee556.tar.gz'
    'asmjit.tar.gz::https://github.com/kobalicek/asmjit/archive/fc251c914e77cd079e58982cdab00a47539d7fc5.tar.gz'
    'llvm.tar.gz::https://github.com/llvm-mirror/llvm/archive/b860b5e8f4ee90d6eb567d83ce8ed1a3e71e496f.tar.gz'
    'git-version.h')

sha256sums=('11a57be2d4b732bcb7bd5bd315aca0591a84f63cd25f59256e4b6dc7dae58c87'
            '0c4cc26e7198bdc2aaac290c113d55dcd0018e2c8f4f0eec8ec986b4680fa14a'
            '217b49cf4a00308b0344cddaa4dc3f8404343e3b05b93f99e33c92369764bcac'
            '1596acf40444d17e17ef574b9ad8c7f2de9cbc429273da0b90883bffdb493071'
            'fffe45442204328bb496cf746be8586b1ac120d3f4e18531b2af04df99b603a0'
            'b1484ff1ae3711084b6dd8a880d0e560fa1c5f6d1c5a87a04a207c4bc3d315af'
            '6fb6de602be1ca9e15be826378c326dcc219b91ce8f41f522f70b86021bff62b'
            'c2a717088b6377fff8c28b31f25fdf30dee78ea4b5c5261c884416fac63536b9'
            '0d1e2b4ae15f98acc49084e23ba94853dba2b0f654865ecedb1072b3959421bf'
            'e1f0a2a525cff2f82d256b967d22b9a6ce81056f6d42ae7216311d7707ea11d5'
            '6d4d6640ca3121620995ee255945161821218752b551a1a180f4215f7d124d45'
            '60ee8f0301eef76cfa913da718e31e3650a903e8ea88852ef88189eff0427a6b'
            'fc804065cedaa0c6432df62c6effbf1c387907faf089e82794dd6d5429d6c51f'
            'cbfc66ff2850afcc72e232446c73ebd781a32d5bced4b9aecc5b52453bb5543a'
            'd58267c0c78f89db3c1fedcd30d4d5447d70bba4a6b9e067e25bc75ac030a96b')

prepare()
{
    cd "$pkgname-$pkgver"

    rmdir 3rdparty/GSL
    ln --symbolic --force ../../GSL-1995e86d1ad70519465374fb4876c6ef7c9f8c61/ 3rdparty/GSL
    rmdir 3rdparty/cereal
    ln --symbolic --force ../../cereal-42a45b6e15fcbd1a3d65b033f5d4d0b2ef6c023d 3rdparty/cereal
    rmdir 3rdparty/ffmpeg
    ln --symbolic --force ../../ppsspp-ffmpeg-7b7ae7b06705bf5539b222e77c779d4b649b53ef 3rdparty/ffmpeg
    rmdir 3rdparty/hidapi
    ln --symbolic --force ../../hidapi-9220f5e77c27b8b3717b277ec8d3121deeb50242 3rdparty/hidapi
    rmdir 3rdparty/libpng
    ln --symbolic --force ../../libpng-eddf9023206dc40974c26f589ee2ad63a4227a1e 3rdparty/libpng
    rmdir 3rdparty/libusb
    ln --symbolic --force ../../libusb-7cfa00e9d723f10167b4d71bceebf2b4b2cbd70e 3rdparty/libusb
    rmdir 3rdparty/pugixml
    ln --symbolic --force ../../pugixml-8bf806c035373bd0723a85c0820cfd5c804bf6cd 3rdparty/pugixml
    rmdir 3rdparty/xxHash
    ln --symbolic --force ../../xxHash-7cc9639699f64b750c0b82333dced9ea77e8436e 3rdparty/xxHash
    rmdir 3rdparty/yaml-cpp
    ln --symbolic --force ../../yaml-cpp-eca9cfd64899525d0a61abb0553849676a0fe511 3rdparty/yaml-cpp
    rmdir 3rdparty/zlib
    ln --symbolic --force ../../zlib-cacf7f1d4e3d44d871b605da3b647f07d718623f 3rdparty/zlib
    rmdir Vulkan/glslang
    ln --symbolic --force ../../glslang-c11e3156af2297f89a23c8db3f5e2323733ee556 Vulkan/glslang
    rmdir asmjit
    ln --symbolic --force ../asmjit-fc251c914e77cd079e58982cdab00a47539d7fc5 asmjit
    rmdir llvm
    ln --symbolic --force ../llvm-b860b5e8f4ee90d6eb567d83ce8ed1a3e71e496f llvm

    cmake . \
        -DCMAKE_BUILD_TYPE='Release' \
        -DCMAKE_INSTALL_PREFIX='/usr' \
        -DCMAKE_EXE_LINKER_FLAGS='-ldl' \
        -DCMAKE_SKIP_RPATH='ON' \
        -DUSE_SYSTEM_FFMPEG='ON' \
        -DUSE_SYSTEM_LIBPNG='ON'

    cp ../../git-version.h rpcs3/
}

build()
{
    cd "$pkgname-$pkgver"

    make
}

package()
{
    cd "$pkgname-$pkgver"

    make DESTDIR="$pkgdir" install

    if [ -n "$pkgdir" ]
    then
        rm --force "$pkgdir/usr/bin/llvm-tblgen"
        rm --recursive --force "$pkgdir/usr/include"
        rm --recursive --force "$pkgdir/usr/lib"
    fi
}
