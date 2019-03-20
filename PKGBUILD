# Maintainer: getzze <getzze at_gmail dot_com>
# From julia-compat package from Jonathon Fernyhough

pkgname=julia-arpack
_pkgname=Arpack
_arpack_ver=3.5.0
pkgver=0.3.0
pkgrel=1
pkgdesc='Arpack Package for Julia (compiled from source)'
arch=(any)
url=https://github.com/JuliaLinearAlgebra/Arpack.jl
license=(MIT)
depends=(julia arpack)
makedepends=(julia-distrohelper)

_commit=master
source=($pkgname-$pkgver.tar.gz::https://github.com/JuliaLinearAlgebra/$_pkgname.jl/archive/v$pkgver.tar.gz
        $pkgname-$pkgver-Deps.toml::https://raw.githubusercontent.com/JuliaRegistries/General/$_commit/${_pkgname:0:1}/$_pkgname/Deps.toml
        $pkgname-$pkgver-Package.toml::https://raw.githubusercontent.com/JuliaRegistries/General/$_commit/${_pkgname:0:1}/$_pkgname/Package.toml
        $pkgname-$pkgver-Versions.toml::https://raw.githubusercontent.com/JuliaRegistries/General/$_commit/${_pkgname:0:1}/$_pkgname/Versions.toml
        https://github.com/opencollab/arpack-ng/archive/${_arpack_ver}.tar.gz
)
sha256sums=('85f95f96ab400e0135b91886828067eaf59357280ce009fb04309019068ecd97'
            '6b20fc5711c63225d87c803032c8533c78304a761937a39a19e225dab01cabcd'
            'd8fc2a720833fb2930bcdc2bc87624cd13852ab8ffb6e27e76b264829d725636'
            'f16a79561cfe8825ba19745a65e6a589735dcd7642f8c5e325a701a878501614'
            '50f7a3e3aec2e08e732a487919262238f8504c3ef927246ec3495617dde81239')

_slug() {
	dh_julia slug "$srcdir"/"$pkgname"-$pkgver-{Package,Versions}.toml
}

_project() {
	dh_julia distro_project_ "$srcdir"/"$pkgname"-$pkgver-{Package,Versions,Deps}.toml
}

prepare() {
    # Generate a Project.toml from Registry metadata
	rm -f Project.toml && _project

    cd $_pkgname.jl-$pkgver

	cat >deps/deps.jl << 'EOF'
if isdefined((@static VERSION < v"0.7.0-DEV.484" ? current_module() : @__MODULE__), :Compat)
    import Compat.Libdl
elseif VERSION >= v"0.7.0-DEV.3382"
    import Libdl
end
const libarpack = joinpath(dirname(@__FILE__), "usr/lib/libarpack.so")
function check_deps()
    global libarpack
    if !isfile(libarpack)
        error("$(libarpack) does not exist, Please re-run Pkg.build(\"Arpack\"), and restart Julia.")
    end

    if Libdl.dlopen_e(libarpack) in (C_NULL, nothing)
        error("$(libarpack) cannot be opened, Please re-run Pkg.build(\"Arpack\"), and restart Julia.")
    end

end
EOF
}

build() {
    cd "$srcdir"/arpack-ng-$_arpack_ver
    
    # Compile Arpack 
    sh bootstrap
    ./configure
    make
#    make check

    # Copy in srcdir for check
    mkdir -p "$srcdir"/$_pkgname.jl-$pkgver/deps/usr/lib/
    cp SRC/.libs/libarpack.so.2.0.0 "$srcdir"/$_pkgname.jl-$pkgver/deps/usr/lib/

    ln -sf libarpack.so.2.0.0 "$srcdir"/$_pkgname.jl-$pkgver/deps/usr/lib/libarpack.so.2
    ln -sf libarpack.so.2.0.0 "$srcdir"/$_pkgname.jl-$pkgver/deps/usr/lib//libarpack.so
}

package() {
	cd "$srcdir"

    install -d "$pkgdir"/usr/share/julia/packages/$_pkgname
	cp -r $_pkgname.jl-$pkgver "$pkgdir"/usr/share/julia/packages/$_pkgname/$(_slug)

    #install -d "$pkgdir"/usr/share/julia/vendor
	#install -m644 Project.toml "$pkgdir"/usr/share/julia/vendor/$_pkgname/Project.toml
	
    #install -Dm644 $_pkgname.jl-$pkgver/LICENSE.md "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

check() {
	cd "$srcdir"/$_pkgname.jl-$pkgver
	HOME="$srcdir" JULIA_LOAD_PATH=src:$JULIA_LOAD_PATH julia test/runtests.jl
}
