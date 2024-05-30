<?php

namespace MozhuiLungdsuo\LaravelLivewireModals\Components;

use Illuminate\Support\Facades\Log;
use Livewire\Component;
use Livewire\Attributes\On;

class Modals extends Component
{
    public $alias;
    public $params = [];
    public $backdrop;
    public $message;
    public $activemodal;
    public function render()
    {
        return view('livewire-bootstrap-modal::modals');
    }
    #[On('showModal')]
    public function showModal($data)
    {
        
        $this->alias = $data['alias'];
        $this->params = $data['params'] ?? [];
        $this->backdrop = $data['backdrop'] ?? '';
        $this->message = $data['message'] ?? '';
        $this->activemodal = rand();
        $this->dispatch('showBootstrapModal',backdrop:$this->backdrop,message:$this->message);
    }
    #[On('resetModal')]
    public function resetModal()
    {
        $this->reset();
       
    }
}
